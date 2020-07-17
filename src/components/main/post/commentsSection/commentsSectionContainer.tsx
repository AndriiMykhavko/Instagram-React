import React from 'react'
import { connect } from 'react-redux'
import CommentsSection from './commentsSection'

class CommentsSectionContainer extends React.Component{
  render() {
    return <CommentsSection />
  }
}

const mapStateToProps = (state: any) => {
  return{

  }
}

export default connect(mapStateToProps, {})(CommentsSectionContainer)