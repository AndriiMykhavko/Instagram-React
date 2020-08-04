import React from 'react'
import styles from './profile.module.scss'
import { UserPhotoSection } from '../userPhotoSection/userPhotoSection'
import ChangeUserPhotoModal from './changeUserPhotoModal/changeUserPhotoModal'
import Post from '../main/Posts/post/post'
import { IPost } from '../main/Posts/post/post'
import { Redirect } from 'react-router-dom'

interface IProps {
  userName: string,
  userPhoto: string,
  userID: string,
  posts: IPost[],
  isAuth: boolean,
  likePost: (postID: string, userID: string) => void,
  unlikePost: (postID: string, userID: string) => void
}

const Profile = (props: IProps): JSX.Element => {
  let usersPost = props.posts.filter( (item: any) => item.ownerID === props.userID )
  let postsElements = usersPost.map( (post: IPost, index) => 
  <Post likes={post.likes} owner={post.owner} key={index}
        postComments={post.postComments} postID={post.postID} postImg={post.postImg}
        postData={post.postData} uploadTime={post.uploadTime} userID={props.userID}
        likePost={props.likePost} unlikePost={props.unlikePost} ownerImage={post.ownerImage}/> 
  )

  if (!props.isAuth) {
    return <Redirect to={"/"} />
  } 

  return(
    <div className={styles.profileWrapper}>
      <div className={styles.profileInfoWrapper}>
       <UserPhotoSection userPhoto={props.userPhoto} headerUserIcon={styles.headerUserIcon} headerUserIconOutline={styles.headerUserIconOutline} headerUserImage={styles.headerUserImage}/>
       <div className={styles.userProfileInfo}>
        <h1>{props.userName}</h1>
        <ChangeUserPhotoModal userName={props.userName}/>
       </div>
      </div>
      {postsElements}
    </div>
  )
}

export default Profile