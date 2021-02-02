import React from 'react'
import { Fragment } from 'react'
import { Link } from 'dva/router'
import ChildElement from '../components/ChildElement'
class UserPage extends React.Component{
  componentDidMount() {
    console.log('====', this.props)
  }
  handelBtnClick = () => {
    this.props.history.push('/')
  }
  render() {
    return (
      <Fragment>
        <h3>This is userPage</h3>
        <Link to='/'>首页</Link>
        <button onClick={this.handelBtnClick}>首页</button>
        <br />
        <ChildElement />
      </Fragment>
    )
  }
}
export default UserPage