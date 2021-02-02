// 顺序栈采用数组
class stack {
  constructor() {
    this.item = []
  }
  push (element) {
    return this.item.unshift(element)
  }
  pop () {
    return this.item.shift()
  }
}