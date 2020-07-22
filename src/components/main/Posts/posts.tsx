import React from 'react'
// import PostContainer from './post/postContainer'
import Post from './post/post'
import { IPost } from './post/post'

interface IProps{
  posts: IPost[],
}

const Posts = (props: IProps): JSX.Element => {
  let postsElements = props.posts.map( (post: IPost) => 
  <Post likes={post.likes} owner={post.owner} key={post.postID}
        postComments={post.postComments} postID={post.postID} postImg={post.postImg}
        postData={post.postData} uploadTime={post.uploadTime}/> 
  )
  return(
    <div>
      {postsElements}
    </div>
  )
}

export default Posts