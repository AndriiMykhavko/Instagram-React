import React from 'react'
import styles from './userPhotoSection.module.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { IUserPtotoProps } from '../../../types';


export const UserPhotoSection: React.FC<IUserPtotoProps> = (props) => {
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