/*
Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.

Make sure that your function does not return a false positive by only checking the day.
*/

function isToday(date) {
    const otherDate = new Date(date);
    const todayDate = new Date();
    
    if(
      otherDate.getDate() == todayDate.getDate() &&
      otherDate.getMonth() == todayDate.getMonth() &&
      otherDate.getYear() == todayDate.getYear()
    )
    {
      return true
      } else {
      return false
    }
}

console.log(isToday(new Date()));