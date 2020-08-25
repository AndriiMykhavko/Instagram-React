import React from 'react'
import Posts from './posts'
import { connect } from 'react-redux'
import { likePost, unlikePost } from '../../../redux/posts/actions'
import { IPostsProps, IPostsDispatchRedux } from '../../../../types'


class PostsContainer extends React.Component<IPostsProps & IPostsDispatchRedux>{

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

const mapStateToProps = (state: any): IPostsProps => {
  return{
    posts: state.postsPage.posts,
    userID: state.auth.userID
  }
}

const mapDispatchToProps: IPostsDispatchRedux = {
  likePost,
  unlikePost
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)