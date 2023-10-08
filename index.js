function isPalindrome(str) {

  const charArray = str.split('');

  const reversedStr = charArray.reverse().join('');
  
  return str === reversedStr;
}

console.log(isPalindrome("madam"));   // true
console.log(isPalindrome("robot"));   // false
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false
