var wordList = [
  "car",
  "bmw",
  "audi",
  "lambo"
]

var currentWord = wordList[Math.floor(Math.random() * 4)];

module.exports = {
  currentWord: currentWord,
  wordList: wordList
}