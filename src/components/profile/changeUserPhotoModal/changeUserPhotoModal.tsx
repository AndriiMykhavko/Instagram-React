import React from 'react';
import Modal from 'react-modal';
import style from '../../AddPostModal/AddPostModal.module.scss'
import newStyles from './changeUserPhotoModal.module.scss'
import ChangeUserPhotoForm from './changeUserPhotoForm/changeUserPhotoForm'
import { setUserPhoto } from '../../../redux/profile/actions'
import { IChangePhotoModalProps } from '../../../../types';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    border                : '1px solid #DBDBDB',
    borderRadius          : '20px'
  }
};
 

const ChangeUserPhotoModal: React.FC<IChangePhotoModalProps> = (props) => {
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
  function afterOpenModal() {
  }
 
  function closeModal(){
    setIsOpen(false);
  }

  const changeUserPhoto = (value: any) => {
    setUserPhoto(props.userName, value.userImage)
    closeModal()
  }

  return (
    <div>
      <button onClick={openModal} className={newStyles.addPhotoButton}>Add Photo</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

        <div className={style.modalWindow}>
          <div className={style.closePostButtonWrapper}>
            <button onClick={closeModal} className={style.closePostButton}><i className="fas fa-times"></i></button>
          </div>
          <ChangeUserPhotoForm onSubmit={changeUserPhoto}/>
        </div>
        
      </Modal>
    </div>
  );
}

export default ChangeUserPhotoModal;