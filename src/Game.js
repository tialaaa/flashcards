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

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  };

  printQuestion(round) {
      util.main(round);
  };

  testCreateCardsArray() {
    const cardsArray = prototypeQuestions.map(question => new Card(question.id, question.question, question.answers, question.correctAnswer));

    return cardsArray;
  };

  testCreateDeck() {
    const cardsArray = prototypeQuestions.map(question => new Card(question.id, question.question, question.answers, question.correctAnswer));
    const deck = new Deck(cardsArray);

    return deck;
  };

  testCreateRound() {
    const cardsArray = prototypeQuestions.map(question => new Card(question.id, question.question, question.answers, question.correctAnswer));
    const deck = new Deck(cardsArray);
    const round = new Round(deck);

    return round;
  };
};

module.exports = Game;