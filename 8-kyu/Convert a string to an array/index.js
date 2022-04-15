/*
Write a function to split a string and convert it into an array of words.

Examples (Input -> Output):
* "Robin Singh" ==> ["Robin", "Singh"]

* "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
*/

// Solution 1
// function stringToArray(string){
//     let arr = []
//     string.split(" ").map(word => (
//       arr.push(word)
//     ))
//     return arr
// }

// Solution 2
function stringToArray(string){
    return string.split(' ')
}


console.log(stringToArray("I love arrays they are my favorite"));