import React from'react'
import ModalWindow from './modalWindow'
import { connect } from 'react-redux'

interface IProps {
  name: any
}

class ModalWindowContainer extends React.Component<IProps> {
  render() {
    return(
      <ModalWindow  name={this.props.name}/>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    name: state.auth.name
  }
}
export default connect (mapStateToProps, {})(ModalWindowContainer)