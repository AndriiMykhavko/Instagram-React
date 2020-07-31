import React from "react";
import { required } from "../../../../utils/validators/validator";
import { Field, reduxForm } from "redux-form";
import styles from '../../../modalWindow/addPostForm/addNewPostForm.module.scss'
import UploadPhoto from "../../../modalWindow/addPostForm/uploadImgPreview/imgPreview";

const ChangeUserPhotoForm = (props: any) => {
  return (
      <form className={styles.addNewPostForm} onSubmit={props.handleSubmit} >
              <div className={styles.margTop}>
                  <Field component={UploadPhoto} accept="image/jpeg,image/png" name="userImage" validate={[required]} />
              </div>
              <div className={styles.modalButton}>
              {props.invalid ? <button className={styles.dissabledButton} disabled>Publish</button> : <button>Publish</button>}
              </div>
      </form>
  )
}

export default reduxForm({form: "addUserPhotoForm"})(ChangeUserPhotoForm);
