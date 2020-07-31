import React from 'react'
import styles from'./post.module.scss'
import { Link } from 'react-router-dom'
import CommentsSection from './commentsSection/commentsSection'
import { UserPhotoSection } from '../../../userPhotoSection/userPhotoSection';
import { IComment } from './commentsSection/comment/comment'


export interface IPost{
  likes: string[],
  owner: string,
  postComments: IComment[],
  postID: string,
  postImg: string,
  postData: string,
  uploadTime: string,
  userID: string,
  ownerImage: string
  likePost: (postID: string, userID: string) => void,
  unlikePost: (postID: string, userID: string) => void
}

const Post = (props: IPost): JSX.Element => {
 
  const likePost = (postID: string, userID: string) => {
    props.likePost(postID, userID)
  }
  const unlikePost = (postID: string, userID: string) => {
    props.unlikePost(postID, userID)
  }

  return(
  <div className={styles.postWrapper}>

    <div className={styles.postOwnerInfo}>
      <Link to="#">
        <UserPhotoSection userPhoto={props.ownerImage}/>
      </Link>
      
      <div className={styles.ownerName}>
    <Link to="#" className={styles.postOwnerName}>{props.owner}</Link>
      </div>
    </div>

    <div className={styles.ownerPhoto}>
      <img src={props.postImg} alt="usersPhoto"/>
    </div>

    <div className={styles.postButtons}>
      <div className={styles.likesButton}>
        
      {props.likes.length === 0 ? <button onClick={() => likePost(props.postID, props.userID)}><i className="far fa-heart"></i></button>
          : 
          props.likes.find((item) => {
           return item === props.userID
          }) === props.userID ? <button onClick={() => unlikePost(props.postID, props.userID)}><i className={`fas fa-heart`+" " + styles.active}></i></button> 
          : <button onClick={() => likePost(props.postID, props.userID)}><i className="far fa-heart" ></i></button>
      }
      </div>
      <div className={styles.likesCount}>
        {props.likes.length} likes
      </div>
      <div className={styles.postData}>
        {props.uploadTime}
      </div>
    </div>
    
    <div className={styles.postText}>
      <Link to="#" className={styles.postOwnerName}>{props.owner}</Link>
      {props.postData}
    </div>

    <CommentsSection postComments={props.postComments} postID={props.postID} owner={props.owner} />
  </div>
  )
}

export default Post;