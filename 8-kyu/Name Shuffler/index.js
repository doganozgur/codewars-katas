/*
Write a function that returns a string in which firstname is swapped with last name.

nameShuffler('john McClane'); => "McClane john"
*/

// Solution 1
// function nameShuffler(str){
//     let name = []
//     //Shuffle It
//     name.push(str.split(' ')[1])
//     name.push(str.split(' ')[0])
//     return name.join(' ')
// }

// Solution 2
function nameShuffler(str) {
    return str.split(' ').reverse().join(' ')
}

console.log(nameShuffler('Dogan Ozgur'));   