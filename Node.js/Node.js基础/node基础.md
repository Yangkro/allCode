### Node
Node是基于Chrome的V8引擎的JavaScript执行环境
#### 引入Node的目的
* JS开发的弊端：不同js文件之间可能存在依赖关系<font color="red">文件依赖</font>，而且可能会出现<font color='red'>命名冲突</font>
* Node.js模块开发：将功能进行抽离，抽离的模块不会相互影响
#### Node的模块化开发
Node.js规定一个<font color="red">JavaScript文件</font>就是一个模块，并且<font color="red">模块内部定义的变量和函数，在默认情况下载外部是无法得到的</font>
##### 模块的导出和导入
* 在功能模块中使用`exports`命令导出(将模块作为exports的属性导出)，使用功能模块时采用`require`语句导入模块
* 将被导出的功能模块作为`model.exports`的属性导出(<font color="red">exports是module.exports的别名，实现效果一样,但是当被重写的覆盖的时候以module.exports为主</font>)
#### Node系统模块
Node.js系统提供的API接口`const fs = require('fs')`，其文件路径的父级路径为当前node的执行路径，如果路径不对可以使用`__dirname`获取当前文件的所在的绝对路径，然后使用`path.join`进行路径拼接
##### Node的文件系统模块（fs)
文件系统模块主要完成对文件的操作，<font color="red">如果对一个文件同时进行读写操作，读取文件的操作会滞后于文件写的操作</font>
* 文件读取
fs.readFile('文件路径/文件名称', [,'编码格式'], callback)。
<font color="red">callback被称为错误优先回调函数，第一个参数为错误</font>
  ```
  const fs = require('fs')
  // console.log(fs)
  fs.readFile("./file.txt", 'utf-8', (error, doc) => {
  // console.log(error)
  // 如果文件读取遇到错误，那么error为一个对象，不是null，当没有错误的时候为null
  if (error === null) {
    console.log(doc)
  }
  })
  ```

* 文件写入
fs.writeFile('文件路径/文件名称', '数据', callback)。<font color="red">没有对应的文件时会自动创建这个文件</font>
  ```
  fs.writeFile('./file.txt', "我要写入内容啦O(∩_∩)O哈哈~", error => {
    if (error != null) {
      // 如果有错误，则停止运行，并打印错误
      console.log(error)
      return;
    }
    console.log("文件写入成功！")
  })
  ```
##### Node系统路径模块（path）
因为不同操作系统的路径分隔符不统一，所以需要path模块对路径进行拼接
* path.join("路径1","路径2",...)