const SESSION_KEY = 'quiz_brusque_user';

/**
 * @typedef {Object} UserData
 * @property {string} escola
 * @property {string} nome
 * @property {number} idade
 */

const SessionManager = {
  save(userData) {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(userData));
  },

  get() {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return null;

    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  },

  clear() {
    sessionStorage.removeItem(SESSION_KEY);
  }
};

/**
 * @typedef {Object} ValidationResult
 * @property {boolean} valid
 * @property {Object} fieldErrors
 */

function validateCadastro(formData) {
  const fieldErrors = {};

  if (!formData.escola || formData.escola.trim() === '') {
    fieldErrors.escola = 'Por favor, informe sua escola.';
  }

  if (!formData.nome || formData.nome.trim() === '') {
    fieldErrors.nome = 'Por favor, informe seu nome.';
  }

  const idadeStr = String(formData.idade).trim();

  if (idadeStr === '') {
    fieldErrors.idade = 'Por favor, informe sua idade.';
  } else {
    const idadeNum = Number(idadeStr);

    if (!Number.isInteger(idadeNum) || isNaN(idadeNum)) {
      fieldErrors.idade = 'A idade deve ser um número inteiro.';
    } else if (idadeNum < 1) {
      fieldErrors.idade = 'A idade deve ser maior que zero.';
    }
  }

  return {
    valid: Object.keys(fieldErrors).length === 0,
    fieldErrors
  };
}

const App = {
  showScreen(screenId) {
    const screens = document.querySelectorAll('section[id^="screen-"]');

    screens.forEach(s => s.style.display = 'none');

    const target = document.getElementById(screenId);

    if (target) target.style.display = 'flex';
  },

  checkSession() {
    const user = SessionManager.get();

    if (!user) {
      this.showScreen('screen-cadastro');
      return false;
    }

    return true;
  },

  handleEnter() {
    App.showScreen('screen-cadastro');
  },

  handleCadastro(event) {
    event.preventDefault();

    const escola = document.getElementById('input-escola').value;
    const nome = document.getElementById('input-nome').value;
    const idade = document.getElementById('input-idade').value;

    ['escola', 'nome', 'idade'].forEach(field => {
      const el = document.getElementById(`error-${field}`);

      if (el) {
        el.textContent = '';
        el.style.display = 'none';
      }

      const input = document.getElementById(`input-${field}`);

      if (input) input.classList.remove('input-invalid');
    });

    const result = validateCadastro({ escola, nome, idade });

    if (!result.valid) {
      Object.entries(result.fieldErrors).forEach(([field, msg]) => {
        const errEl = document.getElementById(`error-${field}`);

        if (errEl) {
          errEl.textContent = msg;
          errEl.style.display = 'block';
        }

        const input = document.getElementById(`input-${field}`);

        if (input) input.classList.add('input-invalid');
      });

      return;
    }

    SessionManager.save({
      escola: escola.trim(),
      nome: nome.trim(),
      idade: parseInt(idade, 10)
    });

    App.showScreen('screen-menu');
    App.renderMenu();
  },

  handleIniciarJogo() {
    if (!App.checkSession()) return;

    Quiz.init();
    App.showScreen('screen-pergunta');
    App.renderQuestion();
  },

  handleSair() {
    SessionManager.clear();
    App.showScreen('screen-inicial');
  },

  handleTentarNovamente() {
    Quiz.init();
    App.showScreen('screen-menu');
    App.renderMenu();
  },

  renderMenu() {
    const user = SessionManager.get();

    if (!user) return;

    const el = document.getElementById('menu-nome-usuario');

    if (el) el.textContent = user.nome;
  },

  renderQuestion() {
    const question = Quiz.getCurrentQuestion();
    const user = SessionManager.get();

    const enunciadoEl = document.getElementById('pergunta-enunciado');

    if (enunciadoEl) {
      enunciadoEl.textContent = question.enunciado;
    }

    const progressoEl = document.getElementById('pergunta-progresso');

    if (progressoEl) {
      progressoEl.textContent =
        `Pergunta ${Quiz.currentIndex + 1} de ${Quiz.totalQuestions}`;
    }

    const usuarioEl = document.getElementById('pergunta-usuario');

    if (usuarioEl && user) {
      usuarioEl.textContent = user.nome;
    }

    const opcoes = document.querySelectorAll('.opcao-item');

    opcoes.forEach((item, idx) => {
      const img = item.querySelector('img');

      if (img) {
        img.src = question.opcoes[idx].src;
        img.alt = question.opcoes[idx].alt;
      }

      item.classList.remove('opcao-selecionada');
    });

    const alertaEl = document.getElementById('pergunta-alerta');

    if (alertaEl) {
      alertaEl.textContent = '';
      alertaEl.style.display = 'none';
    }

    Quiz.selectedOption = null;
  },

  handleEnviar() {
    const result = Quiz.submitAnswer();

    if (result === null) {
      const alertaEl = document.getElementById('pergunta-alerta');

      if (alertaEl) {
        alertaEl.textContent =
          'Selecione uma opção antes de enviar.';
        alertaEl.style.display = 'block';
      }

      return;
    }

    if (Quiz.hasNextQuestion()) {
      Quiz.nextQuestion();
      App.renderQuestion();
    } else {
      App.showScreen('screen-resultado');
      App.renderResult();
    }
  },

  renderResult() {
    const resultData = Quiz.getResult();
    const user = SessionManager.get();

    const pontuacaoEl =
      document.getElementById('resultado-pontuacao');

    if (pontuacaoEl) {
      pontuacaoEl.textContent =
        `Nota: ${resultData.score}/${resultData.total}`;
    }

    const nomeEl =
      document.getElementById('resultado-nome-usuario');

    if (nomeEl && user) {
      nomeEl.textContent = user.nome;
    }

    const emojiEl = document.getElementById('resultado-emoji');
    const msgEl = document.getElementById('resultado-mensagem');
    const nomeP =
      document.getElementById('resultado-nome-paragrafo');

    if (resultData.positive) {
      if (emojiEl) emojiEl.textContent = '😄';

      if (msgEl) {
        msgEl.textContent =
          'Muito bom! Você acertou quase todas!';
      }

      if (nomeP) nomeP.style.display = 'block';
    } else {
      if (emojiEl) emojiEl.textContent = '🤔';

      if (msgEl) {
        msgEl.textContent =
          'Que pena! Parece que você se enganou em algumas perguntas, mas você pode tentar novamente!';
      }

      if (nomeP) nomeP.style.display = 'none';
    }
  },

  init() {
    const btnEntrar = document.getElementById('btn-entrar');

    if (btnEntrar) {
      btnEntrar.addEventListener('click', App.handleEnter);
    }

    const formCadastro =
      document.getElementById('form-cadastro');

    if (formCadastro) {
      formCadastro.addEventListener(
        'submit',
        App.handleCadastro
      );
    }

    const btnIniciar =
      document.getElementById('btn-iniciar-jogo');

    if (btnIniciar) {
      btnIniciar.addEventListener(
        'click',
        App.handleIniciarJogo
      );
    }

    const btnSair = document.getElementById('btn-sair');

    if (btnSair) {
      btnSair.addEventListener('click', App.handleSair);
    }

    const opcoes = document.querySelectorAll('.opcao-item');

    opcoes.forEach(item => {
      item.addEventListener('click', () => {
        const idx = parseInt(
          item.getAttribute('data-index'),
          10
        );

        Quiz.selectOption(idx);

        opcoes.forEach(o =>
          o.classList.remove('opcao-selecionada')
        );

        item.classList.add('opcao-selecionada');

        const alertaEl =
          document.getElementById('pergunta-alerta');

        if (alertaEl) {
          alertaEl.textContent = '';
          alertaEl.style.display = 'none';
        }
      });
    });

    const btnEnviar =
      document.getElementById('btn-enviar');

    if (btnEnviar) {
      btnEnviar.addEventListener(
        'click',
        App.handleEnviar
      );
    }

    const btnTentar =
      document.getElementById('btn-tentar-novamente');

    if (btnTentar) {
      btnTentar.addEventListener(
        'click',
        App.handleTentarNovamente
      );
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
