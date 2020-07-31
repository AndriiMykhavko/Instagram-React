import React from 'react'
import { connect } from 'react-redux'
import AddNewCommentForm from './addNewCommentForm'
import { addCommetnIntoDB } from '../../../../../../redux/posts/actions'
import {reset} from 'redux-form';

interface IProps{
  postID: string,
  owner: string,
  ownerImage: string
}

interface IDispatchRedux{
  addNewComment: (postID: string, owner: string, ownerImage: string, formData: any) => void
}

class AddNewCommentFormContainer extends React.Component<IProps & IDispatchRedux> {
  addNewComment = (formData: any) => {
    this.props.addNewComment(this.props.postID, this.props.owner, this.props.ownerImage, formData.newCommentData)
  }

  render() {
    return (
      <AddNewCommentForm onSubmit={this.addNewComment} />
    )
  }
}

const mapStateToProps = (state: any) => {
  return{
    owner: state.auth.name,
    ownerImage: state.auth.userPhoto
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return{
    addNewComment: (postID: string, owner: string, ownerImage: string, newCommentText: string) => {
      dispatch(addCommetnIntoDB(postID, owner, ownerImage, newCommentText));
      dispatch(reset('addPostCommentForm'));
  }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewCommentFormContainer)