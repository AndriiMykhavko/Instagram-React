import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import style from '../../../../modalWindow/modalWindow.module.scss'
import ownStyle from './postCommentsModal.module.scss'
import Comment from '../commentsSection/comment/comment'
import { IComment } from '../commentsSection/comment/comment'

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
  
}

const PostCommentsModal = (props: any): JSX.Element => {
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

  // let postComments
  // if(props.postComments){
    const postComments = props.postComments?.slice(0).reverse().map( (commentData: IComment, index: any) => 
    <Comment  key={index} owner={commentData.owner} ownerImage={commentData.ownerImage} comment={commentData.comment}/>
    )
  // }
 

  return (
    <div>
      <button onClick={openModal} className={ownStyle.seeAllCommentsButton}>See all comments: {props.postComments && props.postComments.length }</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

        {/* <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2> */}
        <div className={`${style.modalWindow} ${ownStyle.modalWindow}`}>
          <div className={style.closePostButtonWrapper}>
            <button onClick={closeModal} className={style.closePostButton}><i className="fas fa-times"></i></button>
          </div>
          <div>
            {postComments}
          </div>
        </div>
        
      </Modal>
    </div>
  );
}
 
ReactDOM.render(<PostCommentsModal />, document.getElementById('root'));

export default PostCommentsModal;