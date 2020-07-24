import React from 'react'
import styles from'./post.module.scss'
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
  <div className={styles.postWrapper}>

    <div className={styles.postOwnerInfo}>
      <UserPhotoSection />
      
      <div>
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

    <CommentsSection postComments={props.postComments} postID={props.postID} userID={props.userID}/>
  </div>
  )
}

export default Post;