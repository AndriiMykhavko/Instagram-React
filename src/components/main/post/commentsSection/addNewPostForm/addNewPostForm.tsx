import React from "react";
import { FormControl } from '../../../../common/formsControl/formsControl';
import { maxLengthCreator } from "../../../../../utils/validators/validator";
import { Field, reduxForm } from "redux-form";
import './addNewPostForm.scss'
import TextareaAutosize from 'react-textarea-autosize';

const maxLendthField500 = maxLengthCreator(500);

const AddNewPostForm = (props: any) => {
  return (
      <form className="addNewPostForm" onSubmit={props.handleSubmit} >
              <div className="margTop">
                  <Field component={FormControl} el={TextareaAutosize} name="newMessageBody" validate={[maxLendthField500]} 
                  placeholder={"Add your comment..."} />
              </div>
              <div>
                  <button>Publish</button>
              </div>
      </form>
  )
}

export default reduxForm({form: "dialogAddMessageForm"})(AddNewPostForm);
