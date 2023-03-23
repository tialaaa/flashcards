const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Game', function() {
  let newGame;

  beforeEach(function() {
    newGame = new Game();
  });

  it('should store a record of the currentRound', function() {
    expect(newGame.currentRound).to.be.null;
  });

  it('should update currentRound when the start method is called', function() {
    newGame.start()
    expect(newGame.currentRound).to.be.an.instanceOf(Round);
    expect(newGame.currentRound.deck.list).to.have.lengthOf(30);
  });

  it('should create an array of Cards using the given prototypeData array', function() {
    expect(newGame.testCreateCardsArray()[0]).to.be.an.instanceOf(Card);
    expect(newGame.testCreateCardsArray()).to.have.lengthOf(30);
    expect(newGame.testCreateCardsArray()[23]).to.deep.equal({
      id: 24,
      question: 'Object.assign() can take in an indefinite amount of arguments',
      answers: [ 'true', 'false' ],
      correctAnswer: 'true'  
    });
  });

  it('should create a Deck using that cards array', function() {
    expect(newGame.testCreateDeck()).to.be.an.instanceOf(Deck);
    expect(newGame.testCreateDeck().list).to.have.lengthOf(30);
    expect(newGame.testCreateDeck().list[29]).to.deep.equal({
      id: 30,
      question: 'What type of methods are functions that allow you to manipulate the value of a particular data type or class?',
      answers: ["prototype method", "object", "callback function"],
      correctAnswer: 'prototype method' 
    });
  })

  it('should start a new Round using that deck of cards', function() {
    expect(newGame.testCreateRound()).to.be.an.instanceOf(Round);
  });
});