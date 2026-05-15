const questions = [
  {
    id: 1,
    enunciado: "Qual destas imagens representa a Prefeitura de Brusque?",
    opcoes: [
      { src: "assets/images/Prefeitura.png", alt: "Prefeitura Municipal de Brusque" },
      { src: "assets/images/Fenarreco.jpg", alt: "Errado" },
      { src: "assets/images/Fenarreco02.jpg", alt: "Errado" },
      { src: "assets/images/PracinhaPre.jpg", alt: "Errado" }
    ],
    correta: 0
  },

  {
    id: 2,
    enunciado: "Qual é a maior pracinha com grama de Brusque?",
    opcoes: [
      { src: "assets/images/PracinhaPre.jpg", alt: "Errado" },
      { src: "assets/images/PracinhaMa.jpg", alt: "Pracinha Maluche" },
      { src: "assets/images/Pracinha01.jpeg", alt: "Errado" },
      { src: "assets/images/Pracinha03.jpeg", alt: "Errado" }
    ],
    correta: 1
  },

  {
    id: 3,
    enunciado: "Qual destas imagens mostra a Igreja Matriz São Luís de Brusque?",
    opcoes: [
      { src: "assets/images/igreja02.jfif", alt: "Errado" },
      { src: "assets/images/Igreja03.jfif", alt: "Errado" },
      { src: "assets/images/saoluiz.jpg", alt: "Igreja Matriz São Luís" },
      { src: "assets/images/igreja.jfif", alt: "Errado" }
    ],
    correta: 2
  },

  {
    id: 4,
    enunciado: "Qual é a principal festa cultural que celebra as raízes dos imigrantes em Brusque?",
    opcoes: [
      { src: "assets/images/PracinhaPre.jpg", alt: "Errado" },
      { src: "assets/images/Junina.jpg", alt: "Errado" },
      { src: "assets/images/Fenajeep.jpeg", alt: "Errado" },
      { src: "assets/images/Fenarreco01.jfif", alt: "Fenarreco" }
    ],
    correta: 3
  },

  {
    id: 5,
    enunciado: "Qual rio passa por Brusque?",
    opcoes: [
      { src: "assets/images/Cacho.jfif", alt: "Errado" },
      { src: "assets/images/Itajai.jpg", alt: "Rio Itajaí-Mirim" },
      { src: "assets/images/Amazonas.webp", alt: "Errado" },
      { src: "assets/images/Tiete.avif", alt: "Errado" }
    ],
    correta: 1
  },

  {
    id: 6,
    enunciado: "Qual destas imagens representa o museu próximo ao Hospital Azambuja?",
    opcoes: [
      { src: "assets/images/Museu.jpg", alt: "Museu" },
      { src: "assets/images/Museu02.jfif", alt: "Errado" },
      { src: "assets/images/Museu03.webp", alt: "Errado" },
      { src: "assets/images/Praia.webp", alt: "Errado" }
    ],
    correta: 0
  },

  {
    id: 7,
    enunciado: "Brusque é conhecida como a cidade da?",
    opcoes: [
      { src: "assets/images/Empresa03.jpg", alt: "Errado" },
      { src: "assets/images/Empresa02.webp", alt: "Errado" },
      { src: "assets/images/Tecido.jfif", alt: "Indústria Têxtil" },
      { src: "assets/images/Empresa.png", alt: "Errado" }
    ],
    correta: 2
  },

  {
    id: 8,
    enunciado: "Qual é o brasão de Brusque?",
    opcoes: [
      { src: "assets/images/Brusque.jfif", alt: "Brasão de Brusque" },
      { src: "assets/images/Palmeiras.jfif", alt: "Errado" },
      { src: "assets/images/Itajai01.jfif", alt: "Errado" },
      { src: "assets/images/Blumenau.jfif", alt: "Errado" }
    ],
    correta: 0
  },

  {
    id: 9,
    enunciado: "Qual é o prato típico da Fenarreco?",
    opcoes: [
      { src: "assets/images/Marreco.jpg", alt: "Marreco Assado" },
      { src: "assets/images/Prato.jpg", alt: "Errado" },
      { src: "assets/images/Prato02.jfif", alt: "Errado" },
      { src: "assets/images/Prato03.webp", alt: "Errado" }
    ],
    correta: 0
  },

  {
    id: 10,
    enunciado: "Qual das imagens mostra o Parque das Esculturas?",
    opcoes: [
      { src: "assets/images/Parqueescu.jpg", alt: "Parque das Esculturas" },
      { src: "assets/images/PracinhaMa.jpg", alt: "Errado" },
      { src: "assets/images/PracinhaPre.jpg", alt: "Errado" },
      { src: "assets/images/Pracinha01.jpeg", alt: "Errado" }
    ],
    correta: 0
  },

  {
    id: 11,
    enunciado: "Qual é a principal faculdade de Brusque?",
    opcoes: [
      { src: "assets/images/Unifebe.jfif", alt: "UNIFEBE" },
      { src: "assets/images/Furb.jpg", alt: "Errado" },
      { src: "assets/images/Udesc.webp", alt: "Errado" },
      { src: "assets/images/Univali.webp", alt: "Errado" }
    ],
    correta: 0
  },

  {
    id: 12,
    enunciado: "Qual destas imagens mostra o estádio do Brusque?",
    opcoes: [
      { src: "assets/images/Estadio.webp", alt: "Estádio Augusto Bauer" },
      { src: "assets/images/Estadio01.jpg", alt: "Errado" },
      { src: "assets/images/Estadio02.webp", alt: "Errado" },
      { src: "assets/images/Estadio03.jpg", alt: "Errado" }
    ],
    correta: 0
  },

  {
    id: 13,
    enunciado: "Qual é o principal hospital da Azambuja?",
    opcoes: [
      { src: "assets/images/Azambuja.webp", alt: "Hospital Azambuja" },
      { src: "assets/images/Imigrantes.jfif", alt: "Errado" },
      { src: "assets/images/Hospital.jpg", alt: "Errado" },
      { src: "assets/images/Hospital01.jfif", alt: "Errado" }
    ],
    correta: 0
  },

  {
    id: 14,
    enunciado: "Qual destas escolas fica em Brusque?",
    opcoes: [
      { src: "assets/images/Dom.jpg", alt: "Dom João Becker" },
      { src: "assets/images/Escola01.jfif", alt: "Errado" },
      { src: "assets/images/Escola03.jfif", alt: "Errado" },
      { src: "assets/images/Escola02.jpg", alt: "Errado" }
    ],
    correta: 0
  },

  {
    id: 15,
    enunciado: "Qual é o time de futebol de Brusque?",
    opcoes: [
      { src: "assets/images/Time.png", alt: "Errado" },
      { src: "assets/images/BrusqueTime.png", alt: "Brusque Futebol Clube" },
      { src: "assets/images/itajai02.png", alt: "Errado" },
      { src: "assets/images/Saopaulo.png", alt: "Errado" }
    ],
    correta: 1
  }
];
