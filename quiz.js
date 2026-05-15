const APPROVAL_THRESHOLD = 0.6;

const Quiz = {
  currentIndex: 0,

  score: 0,

  selectedOption: null,

  totalQuestions: 15,

  init() {
    this.currentIndex = 0;
    this.score = 0;
    this.selectedOption = null;
  },

  getCurrentQuestion() {
    return questions[this.currentIndex];
  },

  selectOption(index) {
    this.selectedOption = index;
  },

  submitAnswer() {
    if (this.selectedOption === null) {
      return null;
    }

    const question = this.getCurrentQuestion();

    const isCorrect =
      this.selectedOption === question.correta;

    if (isCorrect) {
      this.score += 1;
    }

    return isCorrect;
  },

  hasNextQuestion() {
    return this.currentIndex < this.totalQuestions - 1;
  },

  nextQuestion() {
    if (this.hasNextQuestion()) {
      this.currentIndex += 1;
      this.selectedOption = null;
    }
  },

  isPositiveResult() {
    const threshold = Math.ceil(
      APPROVAL_THRESHOLD * this.totalQuestions
    );

    return this.score >= threshold;
  },

  getResult() {
    return {
      score: this.score,
      total: this.totalQuestions,
      positive: this.isPositiveResult()
    };
  }
};
