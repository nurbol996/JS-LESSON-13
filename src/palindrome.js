function isPalindrome(word) {
    word = word.toLowerCase();
  
    for (let i = 0; i < word.length / 2; i++) {
      if (word[i] !== word[word.length - 1 - i]) {
        return false;
      }
    }
  
    return true;
  }
  console.log(isPalindrome('bananab')); // не знаю существует ли такаое слово 
console.log(isPalindrome('nurbol')); 