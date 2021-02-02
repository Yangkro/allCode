export default {
  // 命名空间
  namespace: 'indexTest',
  state: {
    name: "Yangkro"
  },
  reducers: {
    // 两个参数，一个是state，另一个是要传入的值
    setName(state, payLoad) {
      // console.log(state, payLoad)
      // 不允许直接修改，只能这样改，或者引入immutable.js
      let _state = JSON.parse(JSON.stringify(state))
      _state.name = payLoad.data.name
      return _state
    }
  }
}