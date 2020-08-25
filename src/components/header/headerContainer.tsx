import React from 'react'
import Header from './header';
import { connect } from 'react-redux';
import { logout } from '../../redux/auth/action'
import { IHeaderProps, IHeaderDispatchRedux } from '../../../types';


class HeaderConatiner extends React.Component<IHeaderProps & IHeaderDispatchRedux>{
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

const mapDispatchToProps: IHeaderDispatchRedux = {
  logout 
}

export default connect(mapStateToProps, mapDispatchToProps) (HeaderConatiner);