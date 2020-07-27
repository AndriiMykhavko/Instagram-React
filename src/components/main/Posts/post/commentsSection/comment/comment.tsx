import React from 'react'
import './comment.scss'
import { UserPhotoSection } from '../../userPhotoSection/userPhotoSection'

export interface IComment{
  comment: string,
  owner: string
}

const Comment = (props: IComment): JSX.Element => {
  return(
    <div className="comment">
        <UserPhotoSection />
        <div className="commentText">
          <span> {props.owner} </span>
          {props.comment}
        </div>
      </div>
  )
}

export default Comment