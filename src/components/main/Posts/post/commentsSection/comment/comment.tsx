import React from 'react'
import styles from './comment.module.scss'
import { UserPhotoSection } from '../../../../../userPhotoSection/userPhotoSection'

export interface IComment{
  comment: string,
  owner: string,
  ownerImage: string
}

const Comment = (props: IComment): JSX.Element => {
  return(
    <div className={styles.comment}>
      
      <UserPhotoSection userPhoto={props.ownerImage}/>

      <div className={styles.commentText}>
        <span className={styles.ownerName}> {props.owner} </span>
        {props.comment}
      </div>
      
    </div>
  )
}

export default Comment