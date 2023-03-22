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
  })

  it('should be able to return the current card', function() {
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  // it('should create a new instance of Turn when player takes a turn', function() {
  //   const round = new Round(deck);
  //   // is this test needed? how to test it?
  // });

  it('should increase the turns count, regardless of whether the guess is correct or incorrect', function() {
    expect(round.turns).to.equal(0);

    round.takeTurn('pug');
    round.takeTurn('sea otter');
    expect(round.turns).to.equal(2);
  });

  it('should update the current card to be the next card in the deck', function() {
    expect(round.returnCurrentCard()).to.equal(card1);
    console.log(round.currentIndex)

    round.takeTurn('something random');
    // expect(round.returnCurrentCard()).to.equal(card2);
  });
});