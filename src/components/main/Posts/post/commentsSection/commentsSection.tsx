import React from 'react'
import styles from  './commentSection.module.scss'
import Comment from './comment/comment'
import AddNewCommentFormContainer from './addNewCommentForm/addNewCommentFormContainer'
import { ICommentsSectionProps, IComment } from '../../../../../../types'

const CommentsSection: React.FC<ICommentsSectionProps> = (props) => {
  let postComments = props.postComments.slice(-3).reverse().map( (commentData: IComment, index) => 
    <Comment  key={index} owner={commentData.owner} ownerImage={commentData.ownerImage} comment={commentData.comment}/>
  )

  return(
    <div className={styles.addCommentSection}>

      <div className={styles.texAreaSection}>
        <AddNewCommentFormContainer postID={props.postID}/>
      </div>

      <div className={styles.commentWrapper}>
        {postComments}
      </div>

    </div>
  )
}

export default CommentsSection