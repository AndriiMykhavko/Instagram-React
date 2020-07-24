import React from 'react'
import './commentSection.scss'
import Comment from './comment/comment'
import AddNewCommentForm from './addNewCommentForm/addNewCommentForm'

interface IProps{
  postComments: any[],
  postID: string,
  userID: string
}

const CommentsSection = (props: IProps): JSX.Element => {

  //let postComments = props.postComments.map()

  const addNewComment = (formData: any) => {
    console.log(formData.newCommentData)
  }
  return(
      <div className="addCommentSection">
        <div className="texAreaSection">
        <AddNewCommentForm onSubmit={addNewComment}/>
        </div>
        <div className="commentWrapper">
          {/* <Comment /> */}
          
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