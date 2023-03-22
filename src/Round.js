const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck
    this.currentIndex = 0
    this.currentCard = this.deck.list[this.currentIndex]
    this.turns = 0
    this.incorrectGuesses = []
    this.currentTurn = null
  };

  returnCurrentCard() {
    return this.currentCard;
  };

  takeTurn(guess) {
    this.currentTurn = new Turn(guess, this.currentCard);

    // should current guess string be stored?
    if (!this.currentTurn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id)
    };

    this.turns += 1;
    this.currentIndex += 1;
    this.currentCard = this.deck.list[this.currentIndex];

    return this.currentTurn.giveFeedback()
  };
};

module.exports = Round;