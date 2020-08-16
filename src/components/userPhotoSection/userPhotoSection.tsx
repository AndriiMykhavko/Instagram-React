import React from 'react'
import styles from './userPhotoSection.module.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';

export const UserPhotoSection = (props: any) => {
  return(
    <div className={styles.wrapperIcon}>
      <div className={`${styles.ownerIconOutline} ${props.headerUserIconOutline}`}>
        {
          props.userPhoto ? <div className={`${styles.ownerImage} ${props.headerUserImage}`}>
            <img src={props.userPhoto} alt=""/>
            </div>
          : 
          <div className={`${styles.ownerIcon} ${props.headerUserIcon}`}>
            <i className="fas fa-user"></i>
          </div> 
        }
      </div>
    </div>
  )
}