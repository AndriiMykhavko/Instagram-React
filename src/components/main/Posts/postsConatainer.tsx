import React from 'react'
import Posts from './posts'
import { connect } from 'react-redux'

interface IProps{
  // posts: any,
}

class PostsContainer extends React.Component<IProps>{
  render() {
    return <Posts posts={this.props.posts}/>
  }
}

const mapStateToProps = (state: any) => {
  return{
    posts: state.postsPage.posts
  }
}

export default connect(mapStateToProps, {})(PostsContainer)