class Node{
  constructor(element) {
    this.element = element
    this.previous = null
    this.next = null
  }
}
class DoubleLinkedList {
  // 双向链表
  constructor() {
    this.head = null
    this.length = 0
    // 指向尾部的指针
    this.tail = null
  }

  // 向双向链表的尾部添加节点
  append(element) {
    const newNode = new Node(element)
    // 判断链表是否为空
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      newNode.previous = this.head
    } else {
     //不为空，则向链表尾部插入节点，利用尾插法
      newNode.previous = this.tail
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length ++
  }

  // 插入节点
  insert(position, element) {
    const newNode = new Node(element)
    if (position < 0 || position > this.length) {
      return false
    } else if (position === 0) {
      if (!this.head) {
        this.head = newNode
        this.tail = newNode
        newNode.previous = this.head
      } else {
        // 有节点的时候
        // 让首部的前驱指向新的节点
        this.head.previous = newNode
        // 让行节点的后继指向原来的head
        newNode.next = this.head
        this.head = newNode
      }

    } else if (position === this.length) {
      // 表示向末尾插入节点，直接使用尾插法
      newNode.previous = this.tail
      this.tail.next = newNode
      this.tail = newNode
    } else {
      let index = 0
      let current = this.head
      while (index < position) {
        current = current.next
        index ++
      }
      // 让当前位置元素的前驱的next指向newNode
      current.previous.next = newNode
      // 让新节点的前驱指向之前元素的前驱
      newNode.previous = current.previous
      // 让新节点的后继指向当前元素
      newNode.next = current
      current.previous = newNode
    }
    this.length ++
    return true
  }
  find(element) {
    const newNode = new Node(element)
    let current = this.head
    let index = 0
    while (current != null) {
      if (current.element === element) {
        return index
      }
      current = current.next
      index ++
    }
    return -1
  }
  get(position) {
    if (position < 0 || position > this.length - 1) {
      return false
    } else {
      let current = this.head
      let index = 0
      while (index < position) {
        current = current.next
        index++
      }
      return current.element
    }
  }

  // 删除相应位置的节点
  removeAt(position) {
    let current = this.head
    if (position < 0 || position > this.length - 1) {
      return false
    } else if (position === 0) {
      if (this.length === 1) {
      // 只有一个元素
      this.head = null
      this.tail = null
      } else {
        // 不止一个元素
        current = this.head
        this.head = this.head.next
        this.head.previous = null
      }
    } else if (position === this.length - 1) {
      // 判断删除的是不是最后一个元素，是最后一个元素直接让它断开
      let temple = this.tail
      this.tail = this.tail.previous
      temple.previous.next = null
      temple.previous = null
      this.length--
      return temple.element
    } else {
      let index = 0
      while (index < position) {
        current = current.next
        index++
      }
      // 让该位置的前驱的后继等于该位置的后继，让该位置的后继的前驱等于该位置的前驱
      current.previous.next = current.next
      current.next.previous = current.previous

    }
      this.length --
      // 返回被删除的元素
      return current.element
  }
// 更新某个位置的节点
  update(position, element) {
    let newNode = new Node(element)
    // 删除这个节点
    this.removeAt(position)
    // 插入这个节点
    this.insert(position, element)
  }
  // 根据元素删除某个节点
  remove(element) {
    let newNode = new Node(element)
    // 找到这个元素的位置，然后根据位置删除
    const index = this.find(element)
    this.removeAt(index)
  }
  isEmpty() {
    return this.length === 0
  }
  size() {
    return this.length
  }
}