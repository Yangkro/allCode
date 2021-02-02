function bubbleSort(array) {
  //    let array = [41,15,32,56,33,4,85]
  for (let i = 0; i < array.length - 1; i++){
    // 外层循环完成一次，最后找出一个最值
    for (let j = 0; j < array.length - 1 - i; j++){
      if (array[j] > array[j + 1]) {
        [array[j], array[j+1]] = [array[j+1], array[j]]
      }
    }
  }
  return array
}