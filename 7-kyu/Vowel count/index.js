/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

// solution
const getCount = (str) => {
    let vowelsCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u']

    str.split('').forEach((letter) => {
        if(vowels.includes(letter)) {
        vowelsCount += 1
        }
    })
    return vowelsCount;
}

console.log(getCount('dogan ozgur')) // 4