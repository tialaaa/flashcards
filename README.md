# FlashCards

### Abstract:
This interative flash cards application allows users to test their knowledge of Javascript's array prototype methods using the command line interface. Users can view multiple-choice questions, submit guesses, and receive feedback for each guess. When the 30-question deck is complete, a message shows the final score and how long it took to complete the round.

### App Preview:
![Flashcards example gif](https://user-images.githubusercontent.com/121128718/227368910-380ce4e4-e39a-4413-939c-d8095961a87a.gif)

### Technologies Used:
- Javascript
- Mocha and Chai for test driven development
- MAC Terminal for testing

### Instructions:
##### Setup:
- Clone this repo to your local machine: [FlashCards](https://github.com/tialaaa/flashcards)
- In the terminal, navigate using `cd` into the repo's directory.
- Run `npm install` to install testing dependencies.
- Run `node index.js` to start the program. You will see a welcome message and the first question appears.

##### Using FlashCards:
- Use keyboard arrow keys to select an answer and press return to submit. You will receive feedback.
- Press return for the next question prompt.
- Continue until you receive your final score.
- Repeat until you master the subject!

### Context:
Completed over three days during the beginning of module 2 at the Turing School. Goals for this project included:
- Implement a robust testing suite using TDD by writing tests for the first time
- Contribute code to an partially constructed object-oriented application
- Write modular, reusable code that follows Single Responsibility Principle

### Project Wins:
This was my first project completed using Test Driven Development as the guiding model. Building this application helped solidify my knowledge of this methodology and exposed me to new Mocha/Chai functionality. I'm now familiar with both the `expect` and `assert` Chai assertion APIs, and with using Mocha's `beforeEach` method to reduce repetitive test setup. This project also furthered my understanding of Javascript class-to-class interaction, as the app was built using a series of dependent classes and methods.
