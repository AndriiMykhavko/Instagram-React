import React from 'react'
import styles from './comment.module.scss'
import { UserPhotoSection } from '../../../../../userPhotoSection/userPhotoSection'
import { IComment } from '../../../../../../../types'


const Comment: React.FC<IComment> = (props) => {
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