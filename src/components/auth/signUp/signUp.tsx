import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { Redirect, Link } from 'react-router-dom';
import { required, emailValidation, maxLengthCreator, minLengthCreator } from '../../../utils/validators/validator';
import { FormControl } from '../../common/formsControl/formsControl';
import { connect } from 'react-redux';
import { registration } from '../../../redux/auth/action'
import styles from '../signIn/signInStyles.module.scss'
import { IPropsSignIn } from '../signIn/signIn'


const maxLendthField10 = maxLengthCreator(10);
const minLengthField7 = minLengthCreator(7);


const SignUpForm: React.FC <InjectedFormProps> = (props) => {
    return (
        <>
          <form onSubmit={props.handleSubmit} >
           <div className={styles.margBottom}>
              <Field placeholder={"Name"} el="input" type="text" validate={[required, emailValidation, maxLendthField10]} name={"name"} component={FormControl} />
            </div>
            <div className={styles.margBottom}>
              <Field placeholder={"Email"} el="input" type="text" validate={[required]} name={"email"} component={FormControl} />
            </div>
            <div className={styles.margBottom}>
              <Field placeholder={"Password"} el="input" type="password" validate={[required, minLengthField7, maxLendthField10]} name={"password"} component={FormControl} />
            </div>
            <div>
              <button className={styles.signInButton}>Sign Up</button>
            </div>
          </form>
        </>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(SignUpForm)

interface IReduxDispatch{
  registration: (name: string, email: string, password: string) => void
}

const Login: React.FC<IPropsSignIn & IReduxDispatch> = (props) => {
    const onSubmit = (formData: any) => {
        props.registration(formData.name, formData.email, formData.password);
    }

    if(props.isAuth) {
        return <Redirect to={"/main"} />
    }

    return (
      <div className={styles.wrapperLogin}>
        <div className={styles.width100}>
          <div className={styles.wrapperForm}>
            <h1>Instagram</h1>
            <LoginReduxForm onSubmit={onSubmit} />
            <div className={styles.or}>OR</div>
            <button className={`${styles.googleButton} ${styles.signInButton}`}>Sing In with Google</button>
          </div>
          <div className={styles.wrapperRedirectButton}>
              If you have account,<Link to="/" >SignIn</Link>
          </div>
        </div>
      </div>
    )
    
}

const mapStateToProps = (state: any) => ({
   isAuth: state.auth.isAuth
})

const mapDispatchToProps: IReduxDispatch = {
  registration
}

export default connect(mapStateToProps, mapDispatchToProps) (Login);