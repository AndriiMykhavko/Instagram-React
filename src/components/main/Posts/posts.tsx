import React from 'react'
import Post from './post/post'
import { IPostsDispatchRedux, IPostsProps, IPost } from '../../../../types'


const Posts: React.FC<IPostsProps & IPostsDispatchRedux> = (props): JSX.Element => {
  let postsElements = props.posts.map( (post: IPost, index) => 
  <Post likes={post.likes} owner={post.owner} key={index}
        postComments={post.postComments} postID={post.postID} postImg={post.postImg}
        postData={post.postData} uploadTime={post.uploadTime} userID={props.userID}
        likePost={props.likePost} unlikePost={props.unlikePost} ownerImage={post.ownerImage}/> 
  )
  
  return(
    <div>
      {postsElements}
    </div>
  )
}

export default Posts