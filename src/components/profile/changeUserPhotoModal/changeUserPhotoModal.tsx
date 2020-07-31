import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import style from '../../modalWindow/modalWindow.module.scss'
import newStyles from './changeUserPhotoModal.module.scss'
import ChangeUserPhotoForm from './changeUserPhotoForm/changeUserPhotoForm'
import { setUserPhoto } from '../../../redux/profile/actions'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    border                : '1px solid #DBDBDB',
    // width                 : '500px'
    //width                 : '80%'
  }
};
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

const ChangeUserPhotoModal = (props: any): JSX.Element => {
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
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

        {/* <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2> */}
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
 
ReactDOM.render(<ChangeUserPhotoModal />, document.getElementById('root'));

export default ChangeUserPhotoModal;