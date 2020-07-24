import React from 'react'
// import PostContainer from './post/postContainer'
import Post from './post/post'
import { IPost } from './post/post'

interface IProps{
  posts: IPost[],
  userID: string,
  likePost: any,
  unlikePost: any
}

const Posts = (props: IProps): JSX.Element => {
  let postsElements = props.posts.map( (post: IPost) => 
  <Post likes={post.likes} owner={post.owner} key={post.postID}
        postComments={post.postComments} postID={post.postID} postImg={post.postImg}
        postData={post.postData} uploadTime={post.uploadTime} userID={props.userID}
        likePost={props.likePost} unlikePost={props.unlikePost}/> 
  )
  return(
    <div>
      {postsElements}
    </div>
  )
}

export default Posts