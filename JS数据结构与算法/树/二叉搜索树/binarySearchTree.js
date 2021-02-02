// 二叉搜索树
class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

class BinarySearchTree{
  constructor() {
    this.root = null
  }
  // 插入
  insert(key) {
    const newNode = new Node(key)
    // 插入节点
    if (this.root === null) {
      // 判断是不是空树
      this.root = newNode
    } else {
      // 递归插入
      this.insertNode(this.root, newNode)
    }
  }
  // 递归插入
  insertNode(parentNode, newNode) {
    // 判断值的大小关系
    if (parentNode.key > newNode.key) {
      // 小于的话就想左边插入
      if (parentNode.left === null) {
        // 如果左节点刚好为空，那么就直接插入
        parentNode.left = newNode
      } else {
        // 如果不为空，就继续递归调用
        this.insertNode(parentNode.left, newNode)
      }
    } else {
      // 大于，向右边插入
      if (parentNode.right === null) {
        parentNode.right = newNode
      } else {
        this.insertNode(parentNode.right, newNode)
      }
    }
  }

  // 先序遍历
  preOrderTraverse() {
    this.preOrderTraverseNode(this.root)
  }
  // 先序遍历的递归调用
  preOrderTraverseNode(node) {
    if (node === null) {
      return
    } else {
      // 先序遍历先访问自己
      console.log(node.key)
      // 访问其左子树
      this.preOrderTraverseNode(node.left)
      // 访问右子树
      this.preOrderTraverseNode(node.right)
    }
  }

  //中序遍历
  inOrderTraverse() {
    this.inOrderTraverseNode(this.root)
  }
  // 中序遍历的递归调用
  inOrderTraverseNode(node) {
    if (node === null) {
      return
    } else {
      // 访问左子树
      this.inOrderTraverseNode(node.left)
      // 访问节点
      console.log(node.key)
      // 访问右子树
      this.inOrderTraverseNode(node.right)
    }
  }

  //后序遍历
  postOrderTraverse() {
    this.postOrderTraverseNode(this.root)
  }
  postOrderTraverseNode(node) {
    if (node === null) {
      return
    } else {
      // 访问左子树->右子树->根节点
      this.postOrderTraverseNode(node.left)
      this.postOrderTraverseNode(node.right)
      console.log(node.key)
    }
  }

  //二叉搜索树的最值
  minElement() {
    let current = this.root
    while (current.left != null) {
      current = current.left
    }
    return current.key
  }
  maxElement() {
    let current = this.root
    while (current.right != null) {
      current = current.right
    }
    return current.key
  }

  // 搜索

  // 递归写法
  // search(key) {
  //   return this.searchNode(this.root, key)
  // }
  // searchNode(node, key) {
  //   if (node === null) {
  //     return false
  //   } else {
  //     if (key < node.key) {
  //      return this.searchNode(node.left, key)
  //     } else if (key > node.key) {
  //      return this.searchNode(node.right, key)
  //     } else {
  //       return true
  //     }
  //   }
  // }

  // 非递归写法
  search(key) {
    let current = this.root
    while (current != null) {
      if (current.key > key) {
        current = current.left
      } else if (current.key < key) {
        current = current.right
      } else {
        return true
      }
    }
    // 默认返回false
    return false
  }

  // 节点的删除
  remove(key) {
    // 先找到需要删除的节点
    let current = this.root
    let parent = null
    let isLeftChild = null
    while (current.key != key) {
      parent = current
      if (current.key > key) {
        // 去左子节点找
        isLeftChild = true
        current = current.left
      } else {
        current = current.right
        isLeftChild = false
      }
      // 一直找到子节点的孩子也不相等
      if (current === null) {
        return false
      }
    }
    // 找到
    // 第一种情况：被删除元素无子节点
    if (current.left === null && current.right === null) {
      if (current === this.root) {
        // 判断是不是根节点
        this.root = null
      } else {
        // 是叶子节点
        if (isLeftChild) {
          // 是它父节点的的左子节点
          parent.left = null
        } else {
          parent.right = null
        }
      }
    }
    // 第二种情况，被删除元素只有一个子节点
    else if (current.right === null) {
      // 只有左子节点
      if (current === this.root) {
        // 被删除的是根节点
        this.root = current.left
      } else if (isLeftChild) {
        parent.left = current.left
      } else {
        parent.right = current.left
      }
    } else if (current.left === null) {
      // 只有右子节点
      if (current === this.root) {
        this.root = current.right
      } else if (isLeftChild) {
        parent.left = current.right
      } else {
        parent.right = parent.right
      }
    } else {
      let targetNode = this.getRightMinimum(current)
      if (current === this.root) {
        targetNode.left = this.root.left
        targetNode.right = this.root.right
        this.root = targetNode
      } else if (isLeftChild) {
        targetNode.left = current.left
        targetNode.right = current.right
        parent.left = targetNode
      } else {
        targetNode.left = current.left
        targetNode.right = current.right
        parent.right = targetNode
      }
    }

    // 删除成功
    return true
  }
    /**
     * 如果被删除节点有两个孩子，那么需要找它的左子树的最大值或者右子树的最小值来顶替被删除的位置
     */
    getRightMinimum(deleteNode){
      // 本例采取寻找右子树最小值的方法
      let targetNode = deleteNode.right
      let targetNodeParent = deleteNode
      let flag = false
      while (targetNode.left != null) {
        targetNodeParent = targetNode
        targetNode = targetNode.left
        flag = true
      }
      // 删除这个节点，并返回这个节点
      if (!flag) {
        // 判断是否进入了循环，避免右子树的最大值为他的右孩子时，误删了当前节点的左孩子
        targetNodeParent.right = null
      } else {
        targetNodeParent.left = targetNode.left
      }
      
      return targetNode
    }
}