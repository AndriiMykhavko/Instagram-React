import React from 'react';
import styles from'./App.module.scss';
import { Route } from 'react-router-dom';
import SignInForm from './components/auth/signIn/signIn';
import SignUpForm from './components/auth/signUp/signUp';
import mainContainer from './components/main/mainContainer';
import * as firebase from "firebase";
import { logInUser } from './redux/auth/action'
import { connect } from 'react-redux';
import { setPost, resetInitialLoad, setNewPost, turnOnNewPostNotification } from './redux/posts/actions';
import ProfileContainer from './components/profile/profileContainer'
import { IAppReduxDispatch, IAppProps } from '../types';


class App extends React.Component<IAppProps & IAppReduxDispatch> {
    componentDidMount() {
      firebase.auth().onIdTokenChanged(
          (user) => {
            if (user !== null) {
              this.props.logInUser(user.displayName!, user.uid, user.photoURL!);
            }
            if (user && user.displayName === null) {
              firebase.auth().updateCurrentUser(user);
            }
          }
      );

      firebase.firestore().collection("usersPosts")
      .orderBy("timestamp", "asc").onSnapshot((snapshot) => {
        if(this.props.initialeLoad){
          snapshot.docs.map((doc) => {
            this.props.setPost(doc.id, doc.data())
          })
         this.props.resetInitialLoad()
        } else {
          snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
                 if(change.doc.data().userID !== this.props.userID) {
                  this.props.setNewPost(change.doc.id, change.doc.data())
                  this.props.turnOnNewPostNotification()
                 }
            }
            if (change.type === "modified") {
                console.log("Modified: ", change.doc.data());
            }
            if (change.type === "removed") {
                console.log("Removed: ", change.doc.data());
            }
        });
        }
    });
    
  }

  render() {
    return (
      <div className={styles.mainWrapper}>
        <Route exact path="/" component={SignInForm}/>
        <Route path="/signUp" component={SignUpForm}/>
        <Route path="/main" component={mainContainer}/>
        <Route path="/profile" component={ProfileContainer}/>
      </div>
    );
  }
 
}

const mapStateToProps = (state: any) => {
  return{
    initialeLoad: state.postsPage.initialeLoad,
    userID: state.auth.userID
  }
}

const mapDispatchToProps: IAppReduxDispatch = {
  logInUser,
  setPost,
  resetInitialLoad,
  setNewPost,
  turnOnNewPostNotification
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
