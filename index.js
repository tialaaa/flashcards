const Game = require('../flashcards/src/Game');

const newGame = new Game();

newGame.start();
newGame.printMessage(newGame.currentRound.deck, newGame.currentRound);
newGame.printQuestion(newGame.currentRound);
