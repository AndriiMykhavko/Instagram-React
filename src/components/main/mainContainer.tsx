import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import HeaderConatiner from '../header/headerContainer'
import style from './mainContainer.module.scss'
import PostsContainer from './Posts/postsConatainer'
import AddPostModalContainer from '../AddPostModal/AddPostModalContainer'
import { turnOffNewPostNotification, resetNewPosts, setPost } from '../../redux/posts/actions'
import { IMainProps, IMainDispatchRedux } from '../../../types'


class MainContainer extends React.Component<IMainProps & IMainDispatchRedux>{
  addingNewPostToState = () => {
    this.props.newPosts.map((post) => {
      this.props.setPost(post.postID, post.postData)
    })
    window.focus()
    window.scrollTo( 0, 0 )
    this.props.resetNewPosts()
    this.props.turnOffNewPostNotification()
  }

  render() {
    
    if (!this.props.isAuth) {
      return <Redirect to={"/"} />
    } 

    return(
    <>
      <HeaderConatiner />

      <div className={style.wrapperToMain}>

        <AddPostModalContainer />
        
        { this.props.addedNewPost && <button className={style.addedNewPost} onClick={this.addingNewPostToState}>Added new post</button> }
        
        <Route exact path="/main" component={PostsContainer}/>
        
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

const mapDispatchToProps: IMainDispatchRedux = {
  turnOffNewPostNotification,
  resetNewPosts,
  setPost
}

export default connect (MapStateToProps, mapDispatchToProps) (MainContainer)