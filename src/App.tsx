import React from 'react';
import s from'./App.module.scss';
import { Route } from 'react-router-dom';
import SignInForm from './components/auth/signIn/signIn';
import SignUpForm from './components/auth/signUp/signUp'
import mainContainer from './components/main/mainContainer';
import * as firebase from "firebase";
import { logInUser } from './redux/authReducer'
import { connect } from 'react-redux';
import { setPost, deletPosts } from './redux/postsReaducer';

interface IProps{
  logInUser: any,
  setPost?: any,
  deletPosts: any
}

class App extends React.Component<IProps> {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(
        (user) => {
          if (user !== null) {
            // console.log(user.uid)
            this.props.logInUser(user.displayName);
          }
        }
    );
    // addPostAPI.getAllPosts()
    this.props.deletPosts()
    firebase.firestore().collection("usersPosts")
    .orderBy("uploadTime", "desc").onSnapshot((snapshot) => {
      this.props.deletPosts()
      snapshot.forEach(
        //doc => console.log(doc.data())
        // const postData = []
        // doc => postData.push(doc.id, ...doc.data())
        // const postData = []
        (doc: any) => this.props.setPost(doc.id, doc.data())
        )
    })
  //   firebase.firestore().collection("usersPosts")
  //   .onSnapshot(function(doc: any) {
  //     var source = doc.metadata.hasPendingWrites ? "Local" : "Server";
  //     console.log(source, " data: ", doc.data());
  // });
  }

  render() {
    return (
      <div className={s.mainWrapper}>
        <Route exact path="/" component={SignInForm}/>
        <Route path="/signUp" component={SignUpForm}/>
        <Route path="/main" component={mainContainer}/>
      </div>
    );
  }
 
}

const mapStateToProps = (state: any) => {
  return{
    isAuth: state.auth.isAuth,
  }
}


export default connect(mapStateToProps, {logInUser, setPost, deletPosts})(App);
