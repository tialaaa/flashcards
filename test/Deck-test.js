const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {
  const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
  const deck = new Deck([card1, card2, card3]);

  it('should be initialized with any array of Card objects', function() {
    expect(deck.list[0]).to.equal(card1);
    expect(deck.list[0]).to.be.an('object');

    expect(deck.list[1]).to.equal(card2);
    expect(deck.list[1]).to.be.an('object');

    expect(deck.list[2]).to.equal(card3);
    expect(deck.list[2]).to.be.an('object');
  });

  it('should know how many cards are in the deck', function() {
    expect(deck.countCards()).to.equal(3);
  });
});