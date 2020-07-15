import React from 'react'
import { Main } from './main'
import { connect } from 'react-redux'
import { logout } from '../../redux/authReducer'
import { Redirect } from 'react-router-dom'

interface IProps {
  logout: any,
  state: any,
  isAuth: boolean
}

class MainContainer extends React.Component<IProps>{
  render() {
    return(<>
    {this.props.isAuth ? <Main logout={this.props.logout}/> : <Redirect to={"/"} />}
    </>)
  }
}

const MapStateToProps = (state: any) => {
  return{
    isAuth: state.auth.isAuth,
  }
}

export default connect (MapStateToProps, {logout}) (MainContainer)