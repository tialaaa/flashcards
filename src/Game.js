const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = null
  };

  start() {
    const cardsArray = prototypeQuestions.map(question => new Card(question.id, question.question, question.answers, question.correctAnswer));

    const deck = new Deck(cardsArray);

    this.currentRound = new Round(deck);
  };

  testCreateCardsArray() {
    const cardsArray = prototypeQuestions.map(question => new Card(question.id, question.question, question.answers, question.correctAnswer));
    // console.log('CARDS ARRAY CREATED:', cardsArray)

    return cardsArray;
  };

  testCreateDeck() {
    const cardsArray = prototypeQuestions.map(question => new Card(question.id, question.question, question.answers, question.correctAnswer));

    const deck = new Deck(cardsArray);
    // console.log('DECK CREATED:', deck)

    return deck;
  };

  testCreateRound() {
    const cardsArray = prototypeQuestions.map(question => new Card(question.id, question.question, question.answers, question.correctAnswer));

    const deck = new Deck(cardsArray);
    const round = new Round(deck);
    // console.log('ROUND CREATED:', round)

    return round;
  };

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;