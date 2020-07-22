import React from'react'
import ModalWindow from './modalWindow'
import { connect } from 'react-redux'
import { addPostIntoDB } from '../../../../../redux/postsReaducer'

interface IProps {
  addPostIntoDB: any,
  name: any
}

class ModalWindowContainer extends React.Component<IProps> {
  render() {
    return(
      <ModalWindow addPostIntoDB={this.props.addPostIntoDB} name={this.props.name}/>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    name: state.auth.name
  }
}
export default connect (mapStateToProps, {addPostIntoDB})(ModalWindowContainer)