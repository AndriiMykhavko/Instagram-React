import React from 'react'
import styles from './header.module.scss'
import { UserPhotoSection } from '../userPhotoSection/userPhotoSection'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { NavLink } from 'react-router-dom';

interface IProps {
  logout: () => void,
  userPhoto: string
} 

const Header: React.FC<IProps> = (props: any) => {
  return(
    <div className={styles.headerWrapper}>
      <div>
        <h1>Instagram</h1>
      </div>
      <div className={styles.headerButtons}>
        <NavLink to="/main" className={styles.mainPage} activeClassName={styles.active} ><i className="fas fa-home"></i></NavLink>
        <NavLink to="/profile" className={styles.userPhoto} activeClassName={styles.active}>
          <UserPhotoSection userPhoto={props.userPhoto} headerUserImage={styles.headerUserImage} headerUserIcon={styles.headerUserIcon} headerUserIconOutline={styles.headerUserIconOutline}/>
        </NavLink>
        <button onClick={props.logout}>Log Out</button>
      </div>
    </div>
  )
}

export default Header;