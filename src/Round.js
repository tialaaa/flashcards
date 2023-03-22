const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.currentCard = deck.list[0]
    this.turns = 0
    this.incorrectGuesses = []
    this.currentIndex = 0
  };

  returnCurrentCard() {
    return this.currentCard;
  };

  takeTurn(guess) {
    const newTurn = new Turn(guess, this.currentCard);

    this.turns += 1;

    // this.currentCard changes to next
    // identify which index position is currentCard
    // add one to that index & reassign this to currentCard
    // this.currentIndex = deck.list.indexOf(this.currentCard);
    
    // calls turn.evaluateGuess; If incorrect, stores the ID in a new array incorrectGuesses
    
    // calls giveFeedback
  };
};

module.exports = Round;