import React from 'react'
import PostContainer from './post/postContainer'
import Post from './post/post'

interface IProps{
  posts: any,
  postsElements: any
  likes: [],
  owner: string,
  postComments: [],
  postID: string,
  postImg: string,
}

const Posts = (props: IProps): JSX.Element => {
  console.log(props)
  debugger
  let postsElements = props.posts.map<JSX.Element[]>( (post: any) => <Post likes={props.likes} owner={props.owner} postComments={props.postComments} postID={props.postID} postImg={props.postImg}/> )
  return(
    {postsElements}
  )
}

export default Posts