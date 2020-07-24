import React from 'react'
import './post.scss'
import { Link } from 'react-router-dom'
import CommentsSection from './commentsSection/commentsSection'
import { UserPhotoSection } from './userPhotoSection/userPhotoSection';
import { userInfo } from 'os';

export interface IPost{
  likes: any[],
  owner: string,
  postComments: any[],
  postID: string,
  postImg: string,
  postData: string,
  uploadTime: string,
  userID: string,
  likePost: any,
  unlikePost: any
}

const Post = (props: IPost): JSX.Element => {
  // console.log(props)
  // debugger
 
  const likePost = (postID: string, userID: string) => {
    props.likePost(postID, userID)
  }
  const unlikePost = (postID: string, userID: string) => {
    props.unlikePost(postID, userID)
  }

  return(
  <div className="postWrapper">

    <div className="postOwnerInfo">
      <UserPhotoSection />
      
      <div>
    <Link to="#" className="postOwnerName">{props.owner}</Link>
      </div>
    </div>

    <div className="ownerPhoto">
      <img src={props.postImg} alt="usersPhoto"/>
    </div>

    <div className="postButtons">
      <div className="likesButton">
        
      {props.likes.length === 0 ? <i className="far fa-heart test" onClick={() => likePost(props.postID, props.userID)}></i>
          : 
          props.likes.map((item) => {
            if(props.likes.length != 0 && item === props.userID) {
             return <i className="fas fa-heart active" onClick={() => unlikePost(props.postID, props.userID)}></i>
            } else {
              return <i className="far fa-heart if" onClick={() => likePost(props.postID, props.userID)}></i>
            }
            }
          )
      }
      </div>
      <div className="likesCount">
        {props.likes.length} likes
      </div>
      <div className="postData">
        {props.uploadTime}
      </div>
    </div>
    
    <div className="postText">
      <Link to="#" className="postOwnerName">{props.owner}</Link>
      {props.postData}
    </div>

    <CommentsSection postComments={props.postComments} postID={props.postID} userID={props.userID}/>
  </div>
  )
}

export default Post;