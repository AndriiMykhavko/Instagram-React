import React from'react'
import ModalWindow from './modalWindow'
import { connect } from 'react-redux'

interface IProps {
  name: string,
  userPhoto: string,
  userID: string
}

class ModalWindowContainer extends React.Component<IProps> {
  render() {
    return(
      <ModalWindow  name={this.props.name} userPhoto={this.props.userPhoto} userID={this.props.userID}/>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    name: state.auth.name,
    userPhoto: state.auth.userPhoto,
    userID: state.auth.userID
  }
}
export default connect (mapStateToProps, {})(ModalWindowContainer)