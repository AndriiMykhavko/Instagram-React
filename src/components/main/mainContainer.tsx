import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import HeaderConatiner from '../header/headerContainer'
import style from './mainContainer.module.scss'
// import AddPostButton from './addPostButton/addPostButton'
import PostsContainer from './Posts/postsConatainer'
import ModalWindowContainer from './Posts/post/modalWindow/modalWindowContainer'
import { turnOffNewPostNotification, resetNewPosts, setPost } from '../../redux/posts/actions'

interface IProps {
  logout: any,
  state: any,
  isAuth: boolean,
  addedNewPost: boolean,
  newPosts: any[],
  setNewPostToPosts: any,
  turnOffNewPostNotification: any,
  resetNewPosts: any,
  setPost: any
}

class MainContainer extends React.Component<IProps>{
  addingNewPostToState = () => {
    this.props.newPosts.map((post, index) => {
      this.props.setPost(post.postID, post.postData)
    })
    this.props.resetNewPosts()
    this.props.turnOffNewPostNotification()
     //console.log(this.props.newPosts)
  }
  componentDidMount() {
    console.log(this.props.newPosts)
  }

  render() {
    if (!this.props.isAuth) {
      return <Redirect to={"/"} />
    } 
    return(
    <>
      <HeaderConatiner />
      <div className={style.wrapperToMain}>

        <ModalWindowContainer />

        { this.props.addedNewPost && <button className={style.addedNewPost} onClick={this.addingNewPostToState}>Added new post</button> }

        <PostsContainer />

      </div>
    </>
    )
  }
}

const MapStateToProps = (state: any) => {
  return{
    isAuth: state.auth.isAuth,
    addedNewPost: state.postsPage.addedNewPost,
    newPosts: state.postsPage.newPosts
  }
}

export default connect (MapStateToProps, {turnOffNewPostNotification, resetNewPosts, setPost}) (MainContainer)