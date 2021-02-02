class Node {
  constructor(element) {
    this.element = element
    // 该元素的后继
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    // 记住火车头
    this.head = null
    this.length = 0
    // 记住火车尾巴，方便append（尾插法，降低时间复杂度）
    // this.end = null
  }
  // 向末尾添加元素
  append(element) {
    // 创建需要插入的元素
    const newNode = new Node(element)
    if (!this.head) {
      // 如果链表为空则指向这个元素
      this.head = newNode
      // 不使用尾插法就不用定义一个end
      // this.end = newNode
    } else {
      // 定义一个指针，遍历整个链表，找到后继为空的节点，然后让该节点的后继等于被插入的节点
        let current = this.head
        while (current.next) {
          current = current.next
        }
        current.next = newNode
      }
    this.length ++
  }
  // 插入元素
  insert(position, element) {
    const newNode = new Node(element)
    // 对position的值进行判断
    if (position < 0 || position > this.length) {
      return false
    }else if (position === 0) {
      // 如果是插入到首部，则将当前节点指向head，再将head指向当前节点(头插法)
      newNode.next = this.head
      this.head = newNode
    } else {
      // 如果不是插入首部，则需要查找位置，将目标位置的前驱的next指向newNode，将newNode的后继改为之前目标位置节点
      let index = 0
      let current = this.head
      let previous = null
      while (index < position) {
        previous = current
        current = current.next
        index ++
      }
      // 找到之后修改
      previous.next = newNode
      newNode.next = current
    }
    //插入之后长度加1
    this.length ++
  }
  //获取元素位置 根据位置返回相应的节点
  get(position) {
    if (position < 0 || position > this.length - 1) {
      return null
    }
    // 用指针指向首元结点，用index做计数器
    let index = 1;
    let current = this.head
    while (index < position) {
      current = current.next
      index ++
    }
    return current.element
  }
  // 返回目标元素的索引 如果有则返回第一个相同节点的索引，没有则返回-1
  find(element) {
    let index = 0
    let current = this.head
    while (current) {
      if (current.element === element) {
        return index
      }
      index++
      current = current.next
    }
    return - 1
  }
// 删除相应位置的节点
  removeAt(position) {
    let current = this.head
    if (position < 0 || position > this.length - 1) {
      return false
    } if (position === 0) {
      this.head = this.head.next
    }
    else {
      let previous = null
      let index = 0
      while (index < position) {
        previous = current
        current = current.next
        index++
      }
      previous.next = current.next
    }
    this.length--
    // 返回被删除的元素
    return current.element
  }
  // 根据位置更新某个节点
  update(position, element) {
    // 删除对应位置的节点
    this.removeAt(position)
    // 在对应位置插入节点
    this.insert(position, element)
  }
  // 根据元素移除列表中的某一个节点
  remove(element) {
    // 找到元素的位置
    const index = this.find(element)
    // 根据位置删除节点
    this.removeAt(index)
  }
  isEmpty() {
    return this.length === 0
  }
  size() {
    return this.length
  }
}
