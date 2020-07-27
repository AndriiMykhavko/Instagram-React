import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import HeaderConatiner from '../header/headerContainer'
import './mainContainer.scss'
// import AddPostButton from './addPostButton/addPostButton'
import PostsContainer from './Posts/postsConatainer'
import ModalWindowContainer from './Posts/post/modalWindow/modalWindowContainer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface IProps {
  logout: any,
  state: any,
  isAuth: boolean,
}

class MainContainer extends React.Component<IProps>{
  render() {
    if (!this.props.isAuth) {
      return <Redirect to={"/"} />
    } 
    return(
    <>
      <HeaderConatiner />
      <div className="wrapperToMain">

        <ModalWindowContainer />
        <PostsContainer />
        
        <ToastContainer autoClose={false}/>

      </div>
    </>
    )
  }
}

const MapStateToProps = (state: any) => {
  return{
    isAuth: state.auth.isAuth,
  }
}

export default connect (MapStateToProps, {}) (MainContainer)