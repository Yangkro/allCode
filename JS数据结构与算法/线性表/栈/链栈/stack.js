class Node {
  constructor(element) {
    this.element = element,
    this.next = null  
  }
}
class Stack {
  constructor() {
      this.top = null,
      this.base = this.top,
      this.length = 0
  }

  // 添加元素
  push(element) {
    let newNode = new Node(element)
    if (this.base === null) {
      this.base = newNode
      this.top = newNode
      this.length ++
    } else {
      newNode.next = this.top
      this.top = newNode
      this.length ++
    }
  }
  // 出栈
  pop() {
    if (this.length <= 0) {
      return false
    } else {
      let topElement = this.top.element
      this.top = this.top.next
      this.length--
      return topElement
    }
  }
  // 获取栈顶的元素
  getTop() {
    if (this.length <= 0) {
      return false
    } else {
      return this.top.element
    }
  }
}