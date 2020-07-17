import React from 'react' 
import './comments.scss'
import CommentContainer from './comment/commentContainer'

const Comments: React.FC = (props) => {
  return(
    <div className="commentWrapper">
      <CommentContainer />
      <CommentContainer />
    </div>
  )
}

export default Comments;