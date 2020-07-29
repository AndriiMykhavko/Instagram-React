import React from 'react'
import { connect } from 'react-redux'
import AddNewCommentForm from './addNewCommentForm'
import { addCommetnIntoDB } from '../../../../../../redux/posts/actions'
import {reset} from 'redux-form';
import store from '../../../../../../redux/reduxStore';

interface IProps{
  postID: string,
  owner: string,
}

interface IDispatchRedux{
  addNewComment: (postID: string, owner: string, formData: any) => void
}

class AddNewCommentFormContainer extends React.Component<IProps & IDispatchRedux> {
  addNewComment = (formData: any) => {
    this.props.addNewComment(this.props.postID, this.props.owner, formData.newCommentData)
  }

  render() {
    return (
      <AddNewCommentForm onSubmit={this.addNewComment} />
    )
  }
}

const mapStateToProps = (state: any) => {
  return{
    owner: state.auth.name
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return{
    addNewComment: (postID: string, owner: string, newCommentText: string) => {
      dispatch(addCommetnIntoDB(postID, owner, newCommentText));
      dispatch(reset('addPostCommentForm'));
  }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewCommentFormContainer)