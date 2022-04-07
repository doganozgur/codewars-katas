/*
Description:

#Task:

Write a function that returns true if the number is a "Very Even" number.

If a number is a single digit, then it is simply "Very Even" if it itself is even.

If it has 2 or more digits, it is "Very Even" if the sum of it's digits is "Very Even".

#Examples:

input(88) => returns false -> 8 + 8 = 16 -> 1 + 6 = 7 => 7 is odd 

input(222) => returns true

input(5) => returns false

input(841) => returns true -> 8 + 4 + 1 = 13 -> 1 + 3 => 4 is even
*/

function isVeryEvenNumber(n) {
    // check if number is single digit
    // if so:
    if(n.toString().length == 1) {
        if(n % 2 == 0 || n == 0) {
            return true
        } else {
            return false
        }
    // if not:
    } else {
        let sum = 0
        // iterate over each single digits of the number
        n.toString().split('').forEach((digit) => {
            // get the sum of digits
            sum += parseInt(digit)
        })
        // return sum
        return isVeryEvenNumber(sum)
    }
}

console.log(isVeryEvenNumber(88)); // false
console.log(isVeryEvenNumber(222)); // true
console.log(isVeryEvenNumber(5)); // false
console.log(isVeryEvenNumber(841)); // true