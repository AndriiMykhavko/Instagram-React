import React from 'react'
import styles from './header.module.scss'

interface IProps {
    logout: any
} 

const Header: React.FC<IProps> = (props: any) => {
    return(
        <div className={styles.headerWrapper}>
            <div>
                <h1>Instagram</h1>
            </div>
            <div>
                <button onClick={props.logout}>Log Out</button>
            </div>
        </div>
    )
}

export default Header;