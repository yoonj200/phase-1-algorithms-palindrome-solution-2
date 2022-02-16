function isPalindrome(word) {
  // Write your algorithm here
  // start at index 0, iterate while i < half word length, increment by 1 each time
  for (let i = 0; i < word.length / 2; i++) {
    const j = word.length - 1 - i;
    const startChar = word[i];
    const endChar = word[j];
    //if any letters don't match, return false
    if (startChar !== endChar) return false;
  }
  return true;
}

/* PSEUDOCODE
  iterate from beginning to middle
  race car 7 / 2 == 3.5
  aaaaaa 6 / 2 == 3
    check each letter to corresponding letter from end
      if any letter doesn't match, return false
  return true
*/

/*
  Add written explanation of your solution here
  first letter is same as last letter, second letter is same as second to last letter, etc.
  until we reach the middle, return true
  
  iterate from beginning to middle
    check each letter to corresponding letter from end
      if any letters don't match, return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
