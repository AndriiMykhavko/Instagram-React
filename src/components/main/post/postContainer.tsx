import React from 'react'
import { connect } from 'react-redux'
import Post from './post'

class PostContainer extends React.Component{
  render() {
    return(
      <>
        <Post />
      </>
    )
  }
}

const mapStateToProps = (state: any) => {
  return{

  }
}

export default connect(mapStateToProps, {})(PostContainer)