import React from 'react'
import Comments from './comments'
import { connect } from 'react-redux'

class ComponentContainer extends React.Component{
  render() {
    return(
      <Comments />
    )
  }
}

const mapStateToProps = (state: any) => {
  return{

  }
}

export default connect(mapStateToProps, {})(ComponentContainer)