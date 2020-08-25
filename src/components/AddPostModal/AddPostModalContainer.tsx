import React from'react'
import AddPostModal from './AddPostModal'
import { connect } from 'react-redux'
import { addPostIntoDB } from '../../redux/posts/actions'
import { IAddPostModalProps, IAddPostModalDispatchRedux } from '../../../types'


class AddPostModalContainer extends React.Component<IAddPostModalProps & IAddPostModalDispatchRedux> {
  addPostIntoDB = (userName: string, postImage: any, postData: string, userID: string, userPhoto: string) => {
    this.props.addPostIntoDB(userName, postImage, postData, userID, userPhoto)
  }
  
  render() {
    return(
      <AddPostModal  name={this.props.name} userPhoto={this.props.userPhoto} userID={this.props.userID} addPostIntoDB={this.addPostIntoDB}/>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    name: state.auth.name,
    userPhoto: state.auth.userPhoto,
    userID: state.auth.userID
  }
}

const mapDispatchToProps: IAddPostModalDispatchRedux = {
  addPostIntoDB
}

export default connect (mapStateToProps, mapDispatchToProps)(AddPostModalContainer)