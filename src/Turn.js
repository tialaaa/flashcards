class Turn {
  constructor(guess, currentCard) {
    this.guess = guess
    this.currentCard = currentCard
  };

  returnGuess() {
    return this.guess;
  };

  returnCard() {
    return this.currentCard;
  };

  evaluateGuess() {
    if (this.guess === this.currentCard.correctAnswer) {
      return true;
    } else {
      return false;
    };
  };

  giveFeedback() {
    if (this.evaluateGuess()) {
      return 'Correct!';
    } else {
      return 'Incorrect!';
    };
  };
};

module.exports = Turn;