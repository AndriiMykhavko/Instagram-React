import React from 'react';
import s from'./App.module.scss';
import { Route } from 'react-router-dom';
import SignInForm from './components/auth/signIn/signIn';
import SignUpForm from './components/auth/signUp/signUp'
import mainContainer from './components/main/mainContainer';
import * as firebase from "firebase";
// import store from './redux/reduxStore';
import { logInUser } from './redux/authReducer'
import { connect } from 'react-redux';

interface IProps{
  logInUser: any
}

class App extends React.Component<IProps> {

  componentDidMount() {
    firebase.auth().onAuthStateChanged(
        (user) => {
          if (user !== null) {
            this.props.logInUser();
          }
        }
    );
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
    isAuth: state.auth.isAuth
  }
}


export default connect(mapStateToProps, {logInUser})(App);
