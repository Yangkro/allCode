function selectionSort(array) {
  for (let i = 0; i < array.length -1; i++){
    let minIndex = i
    for (let j = i + 1; j < array.length; j++){
      if (array[j] < array[minIndex]) {
        // 找到最大值的位置
        minIndex = j
      }
    }
    // 交换
    [array[i], array[minIndex]] = [array[minIndex], array[i]]
  }
  return array
}