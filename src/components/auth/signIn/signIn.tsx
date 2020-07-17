import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Redirect, Link } from 'react-router-dom';
import { required, maxLengthCreator, minLengthCreator } from '../../../utils/validators/validator';
import { FormControl } from '../../common/formsControl/formsControl';
import { connect } from 'react-redux';
import { login, googleAuth } from '../../../redux/authReducer'
import './signInStyles.scss'
import phone from '../../../assets/images/phone.png'


const maxLengthField10 = maxLengthCreator(10);
const minLengthField7 = minLengthCreator(7);

interface IProps {
  handleSubmit: any
}

const SignInForm: React.FC <IProps> = (props) => {
    return (
      <>
        <form onSubmit={props.handleSubmit} >
          <div className="margBottom">
            <Field placeholder={"Email"} el="input" type="text" validate={[required]} name={"email"} component={FormControl} />
          </div>
          <div className="margBottom">
            <Field placeholder={"Password"} el="input" type="password" validate={[required, maxLengthField10, minLengthField7]} name={"password"} component={FormControl} />
          </div>
          <div>
            <button className="signInButton">Sign In</button>
          </div>
        </form>
      </>

    )
}

const LoginReduxForm = reduxForm({form: 'login'})(SignInForm)

const Login = (props: any) => {
    const onSubmit = (formData: any) => {
        props.login(formData.email, formData.password);
    }

    if(props.isAuth) {
        return <Redirect to={"/main"} />
    }

    return (
      <div className="wrapperLogin">
        <div className="phonePhoto">
          <img src={phone} alt="phone"/>
        </div>
        <div className="width100">
          <div className="wrapperForm">
            <h1>Instagram</h1>
            <LoginReduxForm onSubmit={onSubmit} />
            <div className="or">OR</div>
            <button className="googleButton signInButton" onClick={props.googleAuth}>Sing In with Google</button>
          </div>
          <div className="wrapperRedirectButton">
              If you dont have account,<Link to="/signUp" >SignUp</Link>
          </div>
        </div>
      </div>
    )
}

const mapStateToProps = (state: any) => ({
   isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login, googleAuth }) (Login);