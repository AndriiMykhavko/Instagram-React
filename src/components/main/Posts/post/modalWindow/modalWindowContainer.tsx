import React from'react'
import ModalWindow from './modalWindow'
import { connect } from 'react-redux'
import { addPostIntoDB } from '../../../../../redux/postsReaducer'

interface IProps {
  addPostIntoDB: any,
  email: any
}

class ModalWindowContainer extends React.Component<IProps> {
  render() {
    return(
      <ModalWindow addPostIntoDB={this.props.addPostIntoDB} email={this.props.email}/>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    email: state.auth.email
  }
}
export default connect (mapStateToProps, {addPostIntoDB})(ModalWindowContainer)