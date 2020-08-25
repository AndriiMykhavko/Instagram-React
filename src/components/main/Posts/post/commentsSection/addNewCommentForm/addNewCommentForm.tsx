import React from "react";
import { FormControl } from '../../../../../common/formsControl/formsControl';
import { required } from "../../../../../../utils/validators/validator";
import { Field, reduxForm, InjectedFormProps } from "redux-form";
import styles from './addNewCommentForm.module.scss'
import TextareaAutosize from 'react-textarea-autosize';


const AddNewCommentForm: React.FC<InjectedFormProps> = (props) => {
  return (
    <form className={styles.addNewCommentForm} onSubmit={props.handleSubmit} >
      <div className={styles.textAreaWrapper}>
        <Field component={FormControl} el={TextareaAutosize} name="newCommentData" validate={[required]} 
        placeholder={"Add your comment..."} />
      </div>
      <div>
      <button className={props.invalid ? styles.dissabledButton : undefined} disabled={props.invalid}>Publish</button>
      </div>
    </form>
  )
}

export default reduxForm({form: "addPostCommentForm", enableReinitialize: true, shouldValidate: () => true})(AddNewCommentForm);
