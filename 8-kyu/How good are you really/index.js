/*
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
*/

// Solution 1
// function betterThanAverage(classPoints, yourPoints) {
//     let classAvg = 0;
//     classPoints.map(point => {
//       classAvg += point
//     })
//     classAvg = classAvg / classPoints.length
//     return yourPoints > classAvg
// }

// Solution 2
function betterThanAverage(classPoints, yourPoints) {
    let classAvg = 0;
    classPoints.reduce((prev, curr) => {
       classAvg = prev + curr
       return classAvg
    }, 0)
    classAvg = classAvg / classPoints.length
    return yourPoints > classAvg
}
  
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));