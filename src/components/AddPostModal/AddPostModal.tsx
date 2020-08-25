import React from 'react';
import Modal from 'react-modal';
import style from './AddPostModal.module.scss'
import AddNewPostForm from './addPostForm/addNewPostForm'
import { IAddPostModalProps, IAddPostModalDispatchRedux } from '../../../types';

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
 

const AddPostModal: React.FC<IAddPostModalProps & IAddPostModalDispatchRedux> = (props) => {
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
  function afterOpenModal() {
  }
 
  function closeModal(){
    setIsOpen(false);
  }

  const addNewPost = (value: any) => {
    props.addPostIntoDB(props.name, value.postImage, value.postMessage, props.userID, props.userPhoto)
    closeModal()
  }

  return (
    <div>
      <button onClick={openModal} className={style.addPostButton}>Add Post</button>
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
          <AddNewPostForm onSubmit={addNewPost}/>
        </div>
        
      </Modal>
    </div>
  );
}
 

export default AddPostModal;