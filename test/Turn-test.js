const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  let card;
  let turn1;
  
  beforeEach(function() {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    turn1 = new Turn('pug', card);
  });

  it('should be a function that creates an instance of Turn', function() {
    expect(turn1).to.be.an.instanceOf(Turn);
  });

  it('should be instantiated with two arguments: a string for the guess, and a Card object for the current card', function() {
    expect(turn1.guess).to.be.a('string');
    expect(turn1.currentCard).to.be.an('object');
  });

  it('should be able to return player\'s guess', function() {
    expect(turn1.returnGuess()).to.equal('pug');
  });

  it('should be able to return the current card', function() {
    expect(turn1.returnCard()).to.equal(card);
    expect(turn1.returnCard()).to.deep.equal({
      id: 1,
      question: "What is Robbie's favorite animal",
      answers: [ 'sea otter', 'pug', 'capybara' ],
      correctAnswer: 'sea otter'
    });
  });

  it('should validate if player\'s guess matches the correct answer of current card', function() {
    expect(turn1.evaluateGuess()).to.equal(false);

    const turn2 = new Turn('sea otter', card);
    expect(turn2.evaluateGuess()).to.equal(true);
  });

  it('should return a feedback message telling if the guess is correct or not', function() {
    expect(turn1.giveFeedback()).to.equal('incorrect!');
    
    const turn2 = new Turn('sea otter', card);
    expect(turn2.giveFeedback()).to.equal('correct!');
  });
});