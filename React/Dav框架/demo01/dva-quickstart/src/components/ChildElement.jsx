import React from 'react'
import { Fragment } from 'react'
import {withRouter} from 'dva/router'
class ChildElement extends React.Component{
  componentDidMount() {
    console.log(this.props)
  }
  handleToIndex() {
    console.log(this.props)
  }
  render() {
    return (
      <Fragment>
        <div>
          通用组件
      </div>
        <button onClick={this.handleToIndex.bind(this)}>点我试试</button>
        {/* <button onClick={this.handleToIndex}>点我试试</button> */}
      </Fragment>

    )
  }
}
export default withRouter(ChildElement)