import React from 'react'
import Posts from './posts'
import { connect } from 'react-redux'
import { IPost } from './post/post'
import { likePost, unlikePost } from '../../../redux/postsReaducer'

interface IReduxState{
  posts: IPost[],
  userID: string,
  likePost?: any,
  unlikePost? :any
}
interface IState{
  // likePost: any
}

class PostsContainer extends React.Component<IReduxState, IState>{

  likePost = (postID: string, userID: string) => {
    this.props.likePost(postID, userID)
  }
  unlikePost = (postID: string, userID: string) => {
    this.props.unlikePost(postID, userID)
  }

  render() {
    return <Posts posts={this.props.posts} userID={this.props.userID} likePost={this.likePost} unlikePost={this.unlikePost}/>
  }
}

const mapStateToProps = (state: any): IReduxState => {
  return{
    posts: state.postsPage.posts,
    userID: state.auth.userID
  }
}

export default connect(mapStateToProps, {likePost, unlikePost})(PostsContainer)