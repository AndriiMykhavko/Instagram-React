import React from 'react'
import styles from  './commentSection.module.scss'
import Comment from './comment/comment'
import AddNewCommentFormContainer from './addNewCommentForm/addNewCommentFormContainer'
import { IComment } from './comment/comment'

interface IProps{
  postComments: IComment[],
  postID: string,
  owner: string,
}

const CommentsSection = (props: IProps): JSX.Element => {

  let postComments = props.postComments.map( (commentData: IComment, index) => 
    <Comment  key={index} owner={commentData.owner}  comment={commentData.comment}/>
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