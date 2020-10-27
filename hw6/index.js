

const findLongestWord = function(str) {
  let string = str.split(' ');
  let wordLength = 0;
  let longestWord;

  for (let i = 0; i < string.length; i += 1) {
    wordLength = string[1].length;

    if (string[i].length > wordLength) {
      longestWord = string[i];

      return longestWord;
    }

  }
};


console.log(
  findLongestWord("The quick brown fox jumped over the lazy dog")
); 

console.log(
  findLongestWord("Google do a roll")
); 

console.log(
    findLongestWord("May the force be with you")
  ); 