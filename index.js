// This is where your project starts.

console.log('Your project is running...'); 

const Game = require('../flashcards/src/Game');

const newGame = new Game();

newGame.start();
newGame.printQuestion(newGame.currentRound);
