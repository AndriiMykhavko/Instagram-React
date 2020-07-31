import React from 'react'
import styles from './userPhotoSection.module.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { NavLink } from 'react-router-dom';

export const UserPhotoSection = (props: any) => {
  return(
    <div className={styles.wrapperIcon}>
      {/* <NavLink to={ props.profileUrl ? props.profileUrl : "#"} activeClassName={styles.active}> */}
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
      {/* </NavLink> */}
    </div>
  )
}