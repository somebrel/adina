function flipCoin(randomNumber = Math.floor(Math.random() * 10)) {
  return randomNumber < 5 ? true : false;
}

module.exports = flipCoin;
