import React from 'react'
import './commentSection.scss'
import Comment from './comment/comment'
import AddNewCommentFormContainer from './addNewCommentForm/addNewCommentFormContainer'
import { IComment } from './comment/comment'

interface IProps{
  postComments: IComment[],
  postID: string,
  owner: string,
}

const CommentsSection = (props: IProps): JSX.Element => {
  // console.log(props.postComments)
  // debugger

  let postComments = props.postComments.map( (commentData: IComment, index) => 
    <Comment  key={index} owner={commentData.owner}  comment={commentData.comment}/>
  )

  return(
      <div className="addCommentSection">
        <div className="texAreaSection">
        <AddNewCommentFormContainer postID={props.postID}/>
        </div>
        <div className="commentWrapper">
          {postComments}
          
        </div>
      </div>
  )
}

export default CommentsSection