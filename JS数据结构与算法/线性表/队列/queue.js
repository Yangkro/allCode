// 采用数组的队列
class Queue{
  constructor() {
    this.item = []
  }
  // 进入队列
  enqueue(element) {
    this.item.push(element)
  }
  // 出队列
  dequeue() {
    // 队列先进先出，所有直接弹出数组的第一个元素
    return this.item.shift()
  }
  // 查看队首
  front() {
    return this.item[0]
  }
  // 判断队列是否为空
  isEmpty() {
    return this.item.length === 0
  }
  size() {
    return this.item.length
  }
}