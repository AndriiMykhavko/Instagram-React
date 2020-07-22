import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './modalWindow.scss'
import AddNewPostForm from './addPostForm/addNewPostForm'
import '@fortawesome/fontawesome-free/css/all.min.css';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    border                : '1px solid #DBDBDB',
    width                 : '500px'
  }
};
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')
 
interface IProps{
  addPostIntoDB?: any,
  name?: any
}

const ModalWindow: React.FC<IProps> = (props: any) => {
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
    props.addPostIntoDB(props.name, value.postImage, value.postMessage)
    closeModal()
    // return console.log(value.newMessageBody)
    // value.newFileBody.name
    // value.newMessageBody
  }

  return (
    <div>
      <button onClick={openModal} className="addPostButton">Add Post</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

        {/* <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2> */}
        <div>
          <div className="closePostButtonWrapper">
            <button onClick={closeModal} className="closePostButton"><i className="fas fa-times"></i></button>
          </div>
          <AddNewPostForm onSubmit={addNewPost}/>
        </div>
        
      </Modal>
    </div>
  );
}
 
ReactDOM.render(<ModalWindow />, document.getElementById('root'));

export default ModalWindow;