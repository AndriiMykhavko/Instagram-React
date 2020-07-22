import React from 'react'
import Posts from './posts'
import { connect } from 'react-redux'
import { IPost } from './post/post'

interface IReduxState{
  posts: IPost[],
}

class PostsContainer extends React.Component<IReduxState>{
  render() {
    return <Posts posts={this.props.posts}/>
  }
}

const mapStateToProps = (state: any): IReduxState => {
  return{
    posts: state.postsPage.posts
  }
}

export default connect(mapStateToProps, {})(PostsContainer)