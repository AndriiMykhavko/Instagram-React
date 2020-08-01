import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import HeaderConatiner from '../header/headerContainer'
import style from './mainContainer.module.scss'
import PostsContainer from './Posts/postsConatainer'
import ModalWindowContainer from '../modalWindow/modalWindowContainer'
import { turnOffNewPostNotification, resetNewPosts, setPost } from '../../redux/posts/actions'
import ProfileContainer from '../profile/profileContainer'

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
  }

  render() {
    // if (!this.props.isAuth) {
    //   return <Redirect to={"/"} />
    // } 
    return(
    <>
      <HeaderConatiner />

      <div className={style.wrapperToMain}>

        {/* <Route path="/main/profile/" component={ProfileContainer} /> */}

        <ModalWindowContainer />
        
        { this.props.addedNewPost && <button className={style.addedNewPost} onClick={this.addingNewPostToState}>Added new post</button> }
        
        <Route exact path="/main" component={PostsContainer}/>
        {/* <PostsContainer /> */}

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