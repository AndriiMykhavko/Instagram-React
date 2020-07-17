import React from 'react'
import './userPhotoSection.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

export const UserPhotoSection: React.FC = (props) => {
  return(
    <div className="wrapperIcon">
      <Link to='#'>
      <div className="ownerIconOutline">
        <div className="ownerIcon">
            <i className="fas fa-user"></i>
        </div>
      </div>
      </Link>
    </div>
  )
}