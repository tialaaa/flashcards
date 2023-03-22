const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck
    this.currentIndex = 0
    this.currentCard = this.deck.list[this.currentIndex]
    this.turns = 0
    this.guesses = []
    this.incorrectGuesses = []
    this.currentTurn = null
  };

  returnCurrentCard() {
    return this.currentCard;
  };

  takeTurn(guess) {
    this.currentTurn = new Turn(guess, this.currentCard);

    if (!this.currentTurn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id)
    };

    this.guesses.push(guess);
    this.turns++;
    this.currentIndex++;
    this.currentCard = this.deck.list[this.currentIndex];

    return this.currentTurn.giveFeedback();
  };

  calculatePercentCorrect() {
    return Math.round((1 - (this.incorrectGuesses.length / this.turns)) * 100);
  };

  endRound() {
    const outcomeMessage = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;

    console.log(outcomeMessage);
    return outcomeMessage;
  };
};

module.exports = Round;