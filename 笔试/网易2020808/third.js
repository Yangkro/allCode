function getResult(array) {
  for (let i = 0; i < array.length; i++){
      return getSum(i) % 10007
  }
}
function getSum(num) {
  let result = 0
  if (num === 1) {
    return 1
  } 
  if (num === 2) {
    return 2
  }
  if (num === 3) {
    return 4
  }
  if (num > 3) {
   return  result = result + getSum(num -1) 
  }
}