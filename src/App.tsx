import React from 'react';
import s from'./App.module.scss';
import { Route } from 'react-router-dom';
import SignInForm from './components/auth/signIn/signIn';
import SignUpForm from './components/auth/signUp/signUp'
import mainContainer from './components/main/mainContainer';

const  App: React.FC = () => {
  return (
    <div className={s.mainWrapper}>
      <Route exact path="/" component={SignInForm}/>
      <Route path="/signUp" component={SignUpForm}/>
      <Route path="/main" component={mainContainer}/>
    </div>
  );
}

export default App;
