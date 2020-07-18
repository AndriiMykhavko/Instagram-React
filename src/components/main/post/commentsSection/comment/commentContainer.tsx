import React from 'react'
import { Comment } from './comment'
import { connect } from 'react-redux'

class CommetContainer extends React.Component{
  render() {
    return <Comment />
  }
}

const mapStateToProps = (state: any) => {
  return{

  }
}
export default connect(mapStateToProps, {})(CommetContainer)