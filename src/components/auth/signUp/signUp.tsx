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
           {/* <div>
              <Field placeholder={"Name"} el="input" type="text" validate={[required, maxLendthField30]} name={"name"} component={FormControl} />
            </div> */}
            <div>
              <Field placeholder={"Email"} el="input" type="text" validate={[required]} name={"email"} component={FormControl} />
            </div>
            <div>
              <Field placeholder={"Password"} el="input" type="password" validate={[required, minLengthField7, maxLendthField10]} name={"password"} component={FormControl} />
            </div>
            <div>
              <button>Sign Up</button>
            </div>
          </form>
          <div>
            <Link to="/" >SignIn</Link>
          </div>
        </>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(SignUpForm)

const Login = (props: any) => {
    const onSubmit = (formData: any) => {
        props.registration(formData.email, formData.password);
        //console.log(formData);
    }

    if(props.isAuth) {
        return <Redirect to={"/main"} />
    }

    return <div>
        <h1>Sign Up</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
    
}

const mapStateToProps = (state: any) => ({
   isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {registration}) (Login);