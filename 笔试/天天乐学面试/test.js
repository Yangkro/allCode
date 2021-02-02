 function generateDomTree() {
  let label = ['div', 'table', 'img', 'p', 'a'];
  let root = { name: 'div', children: [] };
  for (let i = 0; i < 5; i++) {
    let curNode = root;
    curNode.children.push({ name: label[i], children: [] });
    for (let j = 0; j < 4; j++) {
      let secNode = curNode.children[i];
      secNode.children.push({ name: label[j], children: [] });
      for (let k = 1; k < 5; k++) {
        let trdNode = secNode.children[j];
        trdNode.children.push({
          name: label[k],
          children: [{ name: label[k - 1], children: [] }],
        });
      }
    }
  }

  return root;
}
let root = generateDomTree()
console.log(root)
let map = new Map()
function getResult() {
   travlse(map, root)
}
function travlse(map, node) {
  isAdd(map, node)
  // console.log(node.children)
  let len = node.children.length
  if (len > 0) {
    for (let i = 0; i < len; i++){
        // console.log(node.children[i])
    travlse(map, node.children[i])
  }
  }
}
function isAdd(map, node) {
    if (!(map.has(node.name))) {
    map.set(node.name, 1)
  } else {
      let count = map.get(node.name)
      count ++
    map.set(node.name, count)
  }
}
getResult()
console.log(map)
