import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import style from './modalWindow.module.scss'
import AddNewPostForm from './addPostForm/addNewPostForm'
//import '../../../../userPhotoSection/node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import { addPostIntoDB } from '../../redux/posts/actions';

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
 
interface IProps{
  name: string,
  userPhoto: string,
  userID: string
}

const ModalWindow = (props: any): JSX.Element => {
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

  const addNewPost = (value: any) => {
    // console.log(value.newFileBody.name)
    addPostIntoDB(props.name, value.postImage, value.postMessage, props.userID, props.userPhoto)
    closeModal()
    // return console.log(value.newMessageBody)
    // value.newFileBody.name
    // value.newMessageBody
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

        {/* <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2> */}
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
 
ReactDOM.render(<ModalWindow />, document.getElementById('root'));

export default ModalWindow;