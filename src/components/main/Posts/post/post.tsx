import React from 'react'
import styles from'./post.module.scss'
import { Link } from 'react-router-dom'
import CommentsSection from './commentsSection/commentsSection'
import { UserPhotoSection } from '../../../userPhotoSection/userPhotoSection'
import Moment from 'react-moment'
import PostCommentsModal from './postCommentsModal/postCommentsModal'
import { IPost, IPostDispatchRedux } from '../../../../../types'


const Post: React.FC<IPost & IPostDispatchRedux> = (props) => {
 
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
          }) === props.userID ? <button onClick={() => unlikePost(props.postID, props.userID)}><i className={`fas fa-heart ${styles.active}`}></i></button> 
          : <button onClick={() => likePost(props.postID, props.userID)}><i className="far fa-heart" ></i></button>
      }
      </div>

      <div className={styles.likesCount}>
        {props.likes.length} likes
      </div>

      <div className={styles.postData}>
        <Moment fromNow>{props.uploadTime}</Moment>
      </div>
      
    </div>

    { props.postComments.length > 3
      && 
      <div className={styles.postCommentModal}>
        <PostCommentsModal postComments={props.postComments} />
      </div>
    }
    
    
    <div className={styles.postText}>
      <Link to="#" className={styles.postOwnerName}>{props.owner}</Link>
      {props.postData}
    </div>

    <CommentsSection postComments={props.postComments} postID={props.postID} owner={props.owner} />
  </div>
  )
}

export default Post;