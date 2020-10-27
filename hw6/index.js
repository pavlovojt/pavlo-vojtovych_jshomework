

const findLongestWord = function(string) {
  return string.split(' ').reduce((a, b) => (b.length > a.length) ? b : a);
};



console.log(
  findLongestWord("The quick brown fox jumped over the lazy dog")
); 

console.log(
  findLongestWord(" Google    do a roll  ")
); 

console.log(
    findLongestWord("May the force be with you")
  );      