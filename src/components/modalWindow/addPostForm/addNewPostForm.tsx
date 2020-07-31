import React from "react";
import { FormControl } from '../../common/formsControl/formsControl';
import { maxLengthCreator, required } from "../../../utils/validators/validator";
import { Field, reduxForm } from "redux-form";
import styles from './addNewPostForm.module.scss'
import UploadPhoto from "./uploadImgPreview/imgPreview";

const maxLendthField500 = maxLengthCreator(500);

const AddNewPostForm = (props: any) => {
  return (
      <form className={styles.addNewPostForm} onSubmit={props.handleSubmit} >
              <div className={styles.margTop}>
                  <Field component={UploadPhoto} accept="image/jpeg,image/png" name="postImage" validate={[required]} />
              </div>
              <div className={styles.margTop}>
                  <Field component={FormControl} el="textarea" name="postMessage" validate={[required, maxLendthField500]} 
                  placeholder={"Add your comment..."} />
              </div>
              <div className={styles.modalButton}>
              {props.invalid ? <button className={styles.dissabledButton} disabled>Publish</button> : <button>Publish</button>}
              </div>
      </form>
  )
}

export default reduxForm({form: "addNewPostForm"})(AddNewPostForm);
