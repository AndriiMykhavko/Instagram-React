import React from 'react'
import './post.scss'
import { Link } from 'react-router-dom'
import CommentsSection from './commentsSection/commentsSection'
import { UserPhotoSection } from './userPhotoSection/userPhotoSection';

export interface IPost{
  likes: any[],
  owner: string,
  postComments: any[],
  postID: string,
  postImg: string,
  postData: string,
  uploadTime: string
}

const Post = (props: IPost): JSX.Element => {
  return(
  <div className="postWrapper">

    <div className="postOwnerInfo">
      {/* <img src="" alt=""/> */}
      {/* <div className="ownerIconOutline">
        <div className="ownerIcon">
        <i className="fas fa-user"></i>
        </div>
      </div> */}
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
        <i className="far fa-heart"></i>
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

    <CommentsSection />
  </div>
  )
}

export default Post;