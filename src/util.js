const inquirer = require('inquirer');

const genList = (round) => {
  let card = round.returnCurrentCard();
  
  let choices = card.answers.map((answer, index) => {
    return {
      key: index,
      value: answer
    }
  });
  return {
    type: 'rawlist',
    message: card.question,
    name: 'answers',
    choices: choices
  };
}

const getRound = (round) => {
  return Promise.resolve(round);
}

const confirmUpdate = (id, round) => {
  const feedback = round.takeTurn(id);
  return {
    name: 'feedback',
    message: `Your answer of ${id} is ${feedback}`
  }
}

async function main(round) {
  const startTime = Date.now();

  const currentRound = await getRound(round);
  const getAnswer = await inquirer.prompt(genList(currentRound));
  const getConfirm = await inquirer.prompt(confirmUpdate(getAnswer.answers, round));

    if(!round.returnCurrentCard()) {
      round.endRound();

      const endTime = Date.now();
      const durationInMS = endTime - startTime;
      const minutes = Math.floor((durationInMS / 1000) / 60);
      const seconds = Math.round((durationInMS / 1000) % 60);
      console.log(durationInMS)
      console.log(`It took ${minutes} minutes and ${seconds} seconds to play this round.`);
    } else {
      main(round);
    }
}

module.exports.main = main;