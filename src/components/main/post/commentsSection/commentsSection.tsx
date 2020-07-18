import React from 'react'
import './commentSection.scss'
import AddNewPostFromContainer from './addNewPostForm/addNewPostFromContainer'
import CommentContainer from './comment/commentContainer'

const CommentsSection: React.FC = (props: any) => {

  // const addNewComment = (value: any) => {
  //   console.log(value)
  // }

  return(
      <div className="addCommentSection">
        <div className="texAreaSection">
          <AddNewPostFromContainer />
        </div>
        <div className="commentWrapper">
          <CommentContainer />
          <CommentContainer />
        </div>
      </div>
  )
}

export default CommentsSection

// const maxLendthField50 = maxLengthCreator(50);

// const AddNewMessageForm = (props) => {
//   return (
//       <form onSubmit={props.handleSubmit} >
//               <div>
//                   <Field component={FormControl} el="textarea" name="newMessageBody" validate={[required, maxLendthField50]} placeholder={"Enter your message..."} />
//               </div>
//               <div>
//                   <button>Add post</button>
//               </div>
//       </form>
//   )
// }

// export default reduxForm({form: "dialogAddMessageForm"})(AddNewMessageForm);