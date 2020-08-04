import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Redirect, Link } from 'react-router-dom';
import { required, emailValidation } from '../../../utils/validators/validator';
import { FormControl } from '../../common/formsControl/formsControl';
import { connect } from 'react-redux';
import { login, googleAuth } from '../../../redux/auth/action'
import styles from './signInStyles.module.scss'
import phone from '../../../assets/images/phone.png'


interface IProps {
  handleSubmit: any
}

const SignInForm: React.FC <IProps> = (props) => {
    return (
      <>
        <form onSubmit={props.handleSubmit} >
          <div className={styles.margBottom}>
            <Field placeholder={"Email"} el="input" type="text" validate={[required, emailValidation]} name={"email"} component={FormControl} />
          </div>
          <div className={styles.margBottom}>
            <Field placeholder={"Password"} el="input" type="password" validate={[required]} name={"password"} component={FormControl} />
          </div>
          <div>
            <button className={styles.signInButton}>Sign In</button>
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
      <div className={styles.wrapperLogin}>
        <div className={styles.phonePhoto}>
          <img src={phone} alt="phone"/>
        </div>
        <div className={styles.width100}>
          <div className={styles.wrapperForm}>
            <h1>Instagram</h1>
            <LoginReduxForm onSubmit={onSubmit} />
            <div className={styles.or}>OR</div>
            <button className={`${styles.googleButton} ${styles.signInButton}`} onClick={props.googleAuth}>Sing In with Google</button>
          </div>
          <div className={styles.wrapperRedirectButton}>
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