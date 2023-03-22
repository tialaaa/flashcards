class Deck {
  constructor(cardArray) {
    this.list = cardArray;
  };

  countCards() {
    return this.list.length;
  };
};

module.exports = Deck;