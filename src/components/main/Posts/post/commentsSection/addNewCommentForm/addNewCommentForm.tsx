import React from "react";
import { FormControl } from '../../../../../common/formsControl/formsControl';
import { maxLengthCreator, required } from "../../../../../../utils/validators/validator";
import { Field, reduxForm } from "redux-form";
import './addNewCommentForm.scss'
import TextareaAutosize from 'react-textarea-autosize';


const AddNewCommentForm = (props: any) => {
    
  return (
      <form className="addNewCommentForm" onSubmit={props.handleSubmit} >
              <div className="textAreaWrapper">
                  <Field component={FormControl} el={TextareaAutosize} name="newCommentData" validate={[required]} 
                  placeholder={"Add your comment..."} />
              </div>
              <div>
              {props.invalid ? <button className="dissabledButton" disabled>Publish</button> : <button>Publish</button>}
                  {/* <button>Publish</button> */}
              </div>
      </form>
  )
}

export default reduxForm({form: "addPostCommentForm"})(AddNewCommentForm);
