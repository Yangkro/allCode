// 循序表采用数组来定义
class rankedList{
  constructor() {
    this.item = []
  }
  // 顺序表的构建，采用尾插法
  add(element) {
    this.item.push(element)
  }
  // 插入元素
  insert(position, element) {
    if (position < 0 || position > this.item.length - 1) {
      return false
    } else {
      this.item.splice(position, 0, element)
    }
  }
  // 删除某个元素
  remove(position) {
    if (position < 0 || position > this.item.length - 1) {
      return false
    } else {
      this.item.splice(position, 1)
    }
  }
  // 更新元素
  update(position, element) {
    if (position < 0 || position > this.item.length - 1) {
      return false
    } else {
      let oldElement = this.item[position]
      this.item[position] = element
      // 将被替换的元素返回
      return oldElement
    }
  }
  // 查询元素
  getElementByIndex(index) {
    if (index < 0 || index > this.item.length - 1) {
      return false
    } else {
      return this.item[index]
    }
  }
  // 获取元素的位置
  getIndex(element) {
    this.item.indexOf(element)
  }
}