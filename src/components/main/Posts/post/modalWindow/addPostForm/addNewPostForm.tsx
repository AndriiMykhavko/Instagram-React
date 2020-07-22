import React from "react";
import { FormControl } from '../../../../../common/formsControl/formsControl';
import { maxLengthCreator, required } from "../../../../../../utils/validators/validator";
import { Field, reduxForm } from "redux-form";
import './addNewPostForm.scss'
import UploadPhoto from "./uploadImgPreview/imgPreview";
// import TextareaAutosize from 'react-textarea-autosize';

const maxLendthField500 = maxLengthCreator(500);

const AddNewPostForm = (props: any) => {
  return (
      <form className="addNewPostForm" onSubmit={props.handleSubmit} >
              <div className="margTop">
                  <Field component={UploadPhoto} accept="image/jpeg,image/png" name="postImage" validate={[required]} />
              </div>
              <div className="margTop">
                  <Field component={FormControl} el="textarea" name="postMessage" validate={[required, maxLendthField500]} 
                  placeholder={"Add your comment..."} />
              </div>
              <div className="modalButton">
              {props.invalid ? <button className="dissabledButton" disabled>Publish</button> : <button>Publish</button>}
              </div>
      </form>
  )
}

export default reduxForm({form: "addNewPostForm"})(AddNewPostForm);
