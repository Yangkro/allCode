function getKeyWorld(array) {
  // 获取单词的数量
  let num = array.length
  let set = new Set()
  let map = new Map()
  for (let i = 0; i < array.length; i++){
    // 去掉重复元素
    set.add(array[i])
  }
  console.log(set)
  for (let value of set) {
      let len = array.filter((i) => {
      return value === i
   })
    map.set(value, len.length)
  }
  // console.log(num)
  let number = 0
  for (let [key, value] of map) {
    if (value / num > 0.01) {
      // console.log(value, key)
      number ++
    }
  }
  return number
}