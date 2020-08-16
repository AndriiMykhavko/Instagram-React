import React from 'react'
import Header from './header';
import { connect } from 'react-redux';
import { logout } from '../../redux/auth/action'

interface IProps {
  userPhoto: string
}

interface IDispatchRedux{
  logout: () => void
}

class HeaderConatiner extends React.Component<IProps & IDispatchRedux>{
  logout = () => {
    this.props.logout()
  }

  render() {
    return(
      <div>
        <Header logout={this.logout} userPhoto={this.props.userPhoto} />
      </div>
    )
  }
}

const mapStateToProps = (state: any) => {
  return{
    userPhoto: state.auth.userPhoto
  }
}

const mapDispatchToProps: IDispatchRedux = {
  logout 
}

export default connect(mapStateToProps, mapDispatchToProps) (HeaderConatiner);