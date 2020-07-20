import React from 'react'
import { connect } from 'react-redux'
import AddNewCommentForm from './addNewCommentForm'


class AddNewPostContainer extends React.Component{
  addNewComment = (value: any) => {
    console.log(value)
  }

  render() {
    return(
      <AddNewCommentForm onSubmit={this.addNewComment}/>
    )
  }
}

const mapStateToProps = (state: any) => {
  return{

  }
}

export default connect(mapStateToProps, {})(AddNewPostContainer)