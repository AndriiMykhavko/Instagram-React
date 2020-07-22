import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Redirect, Link } from 'react-router-dom';
import { required, maxLengthCreator, minLengthCreator } from '../../../utils/validators/validator';
import { FormControl } from '../../common/formsControl/formsControl';
import { connect } from 'react-redux';
import { registration } from '../../../redux/authReducer'


const maxLendthField10 = maxLengthCreator(10);
const minLengthField7 = minLengthCreator(7);

interface IProps {
  handleSubmit: any
}

const SignUpForm: React.FC <IProps> = (props) => {
    return (
        <>
          <form onSubmit={props.handleSubmit} >
           <div className="margBottom">
              <Field placeholder={"Name"} el="input" type="text" validate={[required, maxLendthField10]} name={"name"} component={FormControl} />
            </div>
            <div className="margBottom">
              <Field placeholder={"Email"} el="input" type="text" validate={[required]} name={"email"} component={FormControl} />
            </div>
            <div className="margBottom">
              <Field placeholder={"Password"} el="input" type="password" validate={[required, minLengthField7, maxLendthField10]} name={"password"} component={FormControl} />
            </div>
            <div>
              <button className="signInButton">Sign Up</button>
            </div>
          </form>
        </>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(SignUpForm)

const Login = (props: any) => {
    const onSubmit = (formData: any) => {
        //props.registration(formData.email, formData.password);
        props.registration(formData.name, formData.email, formData.password);
        //console.log(formData);
    }

    if(props.isAuth) {
        return <Redirect to={"/main"} />
    }

    return (
      <div className="wrapperLogin">
        <div className="width100">
          <div className="wrapperForm">
            <h1>Instagram</h1>
            <LoginReduxForm onSubmit={onSubmit} />
            <div>OR</div>
            <button className="googleButton signInButton">Sing In with Google</button>
          </div>
          <div className="wrapperRedirectButton">
              If you have account,<Link to="/" >SignIn</Link>
          </div>
        </div>
      </div>
    )
    
}

const mapStateToProps = (state: any) => ({
   isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {registration}) (Login);