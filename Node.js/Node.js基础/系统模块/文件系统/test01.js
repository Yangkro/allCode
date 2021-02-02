const fs = require('fs')
// console.log(fs)
fs.readFile("./file.txt", 'utf-8', (error, doc) => {
  // 读取文件
  // console.log(error)
  // 如果文件读取遇到错误，那么error为一个对象，不是null，当没有错误的时候为null
  if (error === null) {
    console.log(doc)
  }
})

fs.writeFile('./file.txt', "我要写入内容啦O(∩_∩)O哈哈~", error => {
  if (error != null) {
    // 如果有错误，则停止运行，并打印错误
    console.log(error)
    return;
  }
  console.log("文件写入成功！")
})
