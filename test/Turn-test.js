const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  var card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');

  it('should be a function', function() {
    const turn = new Turn;
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn('someGuess', card);
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should be able to return player\'s guess', function() {
    const turn = new Turn('someGuess', card);
    expect(turn.returnGuess()).to.equal('someGuess');
  });

  it('should be able to return the current card', function() {
    const turn = new Turn('someGuess', card);

    expect(turn.returnCard()).to.equal(card);
    expect(turn.returnCard()).to.deep.equal({
      id: 1,
      question: "What is Robbie's favorite animal",
      answers: [ 'sea otter', 'pug', 'capybara' ],
      correctAnswer: 'sea otter'
    });
  });

  it('should validate if player guess matches correct answer for current card', function() {
    const turn1 = new Turn('capybara', card);
    const turn2 = new Turn('sea otter', card);
    
    expect(turn1.evaluateGuess()).to.equal(false);
    expect(turn2.evaluateGuess()).to.equal(true);
  });

  it('should give feedback on whether the guess is correct or not', function() {
    const turnA = new Turn('capybara', card);
    const turnB = new Turn('sea otter', card);

    expect(turnA.giveFeedback()).to.equal('Incorrect!');
    expect(turnB.giveFeedback()).to.equal('Correct!');
  })
});