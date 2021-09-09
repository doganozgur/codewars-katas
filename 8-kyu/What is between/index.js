/*
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
*/
const between = (a, b) => {
    const arr = []
    while(a < b) {
      for(let i = a; i <= b; i++) {
        arr.push(i)
      }
      return arr
    }
}

console.log(between(1, 5)); // [ 1, 2, 3, 4, 5 ]