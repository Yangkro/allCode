// 定义新的节点，节点包含节点信息和优先级
class Node{
  constructor(data, priority) {
    this.data = data,
      this.priority = priority
  }
}

// 还是用数组来作为容器
class PriorityQueue{
  constructor() {
    this.item = []
  }
  // 根据优先级加入到队列中
  enqueue(data, priority) {
    // 产生新的节点
    const newNode = new Node(data, priority)
    // 判断队列是否为空，空就直接加入
    if (this.isEmpty()) {
      this.item.push(newNode)
    } else {
      // 判断是否加入，排除整个队列的优先级都大于新元素的优先级
      let added = false
      // this.item.forEach((value, index) => {
      //   if (value.priority <= priority) {
      //     // 高优先级的在前面
      //     this.item.splice(index, 0, newNode)
      //     added = true
      //   }
      // })
      for (let i = 0; i < this.item.length; i++){
        if (this.item[i].priority <= priority) {
          this.item.splice(i, 0, newNode)
          added = true
          break
        }
      }
      if (!added) {
        this.item.push(newNode)
      }
    }
  }
  dequeue() {
    return this.item.shift()
  }
  front() {
    return this.item[0]
  }
  isEmpty() {
    return this.item.length === 0
  }
  size() {
    return this.item.length
  }
}