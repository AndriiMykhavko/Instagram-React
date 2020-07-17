import React from 'react'
import { connect } from 'react-redux'
import AddNewPostForm from './addNewPostForm'


class AddNewPostContainer extends React.Component{
  addNewComment = (value: any) => {
    console.log(value)
  }

  render() {
    return(
      <AddNewPostForm onSubmit={this.addNewComment}/>
    )
  }
}

const mapStateToProps = (state: any) => {
  return{

  }
}

export default connect(mapStateToProps, {})(AddNewPostContainer)