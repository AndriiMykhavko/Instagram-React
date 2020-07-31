import React from 'react'
import Header from './header';
import { connect } from 'react-redux';
import { logout } from '../../redux/authReducer'

interface IProps {
  logout: any,
  userPhoto: string
}  

class HeaderConatiner extends React.Component<IProps>{
  render() {
    return(
      <div>
        <Header logout={this.props.logout} userPhoto={this.props.userPhoto} />
      </div>
    )
  }
}

const mapStateToProps = (state: any) => {
  return{
    userPhoto: state.auth.userPhoto
  }
}
export default connect(mapStateToProps, {logout}) (HeaderConatiner);