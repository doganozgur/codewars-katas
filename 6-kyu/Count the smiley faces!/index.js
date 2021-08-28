/*
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]
*/

// solution
function countSmileys(arr) {
  let count = 0;
  // iterate over arr items' letters
    for(let i = 0; i < arr.length; i++) {
      let currentCharacter = arr[i]
      if(currentCharacter.charAt(0) === ':' || currentCharacter.charAt(0) === ';') {
        if(currentCharacter.charAt(1) === ')' || currentCharacter.charAt(1) === 'D') {
          count += 1
        }
        if(currentCharacter.charAt(1) === '-' || currentCharacter.charAt(1) === '~') {
          if(currentCharacter.charAt(2) === ')' || currentCharacter.charAt(2) === 'D') {
            count += 1
          }
        }
      }
    }
  return count;
}

console.log(countSmileys([':)', ';(', ';}', ':-D']))       // should return 2;
console.log(countSmileys([';D', ':-(', ':-)', ';~)']))     // should return 3;
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])) // should return 1;