import React from 'react';
import { connect } from 'dva'
function IndexPage(props) {
  console.log(props)
  function handelBtnClick() {
    // console.log(props)
    props.dispatch({
      type: 'indexTest/setName',
      data: {
        name: "Lucy"
      }
    })
  }
  return (
    <div>
      {props.name}
      <button onClick={handelBtnClick}>请点击</button>
    </div>
  )
}
const mapStateToProps = state => {
  // console.log(state)
  return {
    msg: 'hello world',
    name: state.indexTest.name
  }
}
export default connect(mapStateToProps)(IndexPage)
// export default connect()(IndexPage);
