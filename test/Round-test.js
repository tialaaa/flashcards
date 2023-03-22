const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

describe('Round', function() {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;

  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should begin with current card as the first card in the deck', function() {
    expect(round.currentCard).to.equal(card1);
  });

  it('should be able to return the current card', function() {
    expect(round.returnCurrentCard()).to.equal(card1);

    round.currentCard = card3;
    expect(round.returnCurrentCard()).to.equal(card3);
  });

  it('should create a new instance of Turn when player takes a turn', function() {
    round.takeTurn('horse');
    expect(round.currentTurn).to.be.an.instanceOf(Turn);
  });

  it('should increase the turns count, regardless of whether the guess is correct or incorrect', function() {
    expect(round.turns).to.equal(0);

    round.takeTurn('sea otter');
    round.takeTurn('liver');
    expect(round.turns).to.equal(2);
  });

  it('should update the current card to be the next card in the deck', function() {
    expect(round.returnCurrentCard()).to.equal(card1);

    round.takeTurn('something random');
    expect(round.returnCurrentCard()).to.equal(card2);

    round.takeTurn('something else');
    expect(round.returnCurrentCard()).to.equal(card3);
  });

  it('should store the card ID of only incorrect guesses in an array', function() {
    expect(round.incorrectGuesses).to.be.empty;

    round.takeTurn('donkey');
    expect(round.incorrectGuesses[0]).to.equal(card1.id);
    expect(round.incorrectGuesses[0]).to.equal(1);

    round.takeTurn('gallbladder');
    expect(round.incorrectGuesses).to.have.lengthOf(1);
  });

  it('should return feedback regarding whether the guess is incorrect or correct', function() {
    expect(round.takeTurn('sea otter')).to.equal('correct!');

    expect(round.takeTurn('heart')).to.equal('incorrect!');
  });

  it('should calculate and return the percentage of correct guesses', function() {
    expect(round.calculatePercentCorrect()).to.be.NaN;

    round.takeTurn('sea otter');
    expect(round.calculatePercentCorrect()).to.equal(100);

    round.takeTurn('lung');
    round.takeTurn('Fitzgerald');
    expect(round.calculatePercentCorrect()).to.equal(67);
  });

  it('should return a message displaying the final score when the round ends', function() {
    round.takeTurn('walrus');
    round.takeTurn('gallbladder');
    round.takeTurn('Bob');
    expect(round.endRound()).to.equal('** Round over! ** You answered 33% of the questions correctly!');
  });

  it('should always display the correct final score when the round ends', function() {
    round.takeTurn('sea otter');
    round.takeTurn('gallbladder');
    round.takeTurn('Fitzgerald');
    expect(round.endRound()).to.equal('** Round over! ** You answered 100% of the questions correctly!');
  });
});