import React from 'react'
import './comment.scss'
import { UserPhotoSection } from '../../userPhotoSection/userPhotoSection'

export const Comment: React.FC = (props: any) => {
  return(
    <div className="comment">
        <UserPhotoSection />
        <div className="commentText">
          <span> me </span>
        This book is a treatise on the theory of ethics, very popular during the Renaissance. 
        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        This book is a treatise on the theory of ethics, very popular during the Renaissance. 
        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        This book is a treatise on the theory of ethics, very popular during the Renaissance. 
        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        This book is a treatise on the theory of ethics, very popular during the Renaissance. 
        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        </div>
      </div>
  )
}