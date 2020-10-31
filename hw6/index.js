const findLongestWord = function (string) {
  let str =  string.split(" ");
  let longest = 0;
  let word = null;
  for (let i = 0; i<str.length;  i += 1) {
    if ( longest < str[i].length) {
      longest =  str[i].length;
    word = str[i]
  }
  }
  return  word;
};

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'

  

