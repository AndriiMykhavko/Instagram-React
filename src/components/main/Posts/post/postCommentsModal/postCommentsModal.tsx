import React from 'react';
import Modal from 'react-modal';
import style from '../../../../AddPostModal/AddPostModal.module.scss'
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
    borderRadius          : '20px'
  }
};
 
 
interface IProps{
  postComments: IComment[]
}

const PostCommentsModal: React.FC<IProps> = (props) => {
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
  function afterOpenModal() {
  }
 
  function closeModal(){
    setIsOpen(false);
  }

  
    const postComments = props.postComments?.slice(0).reverse().map( (commentData: IComment, index: any) => 
    <Comment  key={index} owner={commentData.owner} ownerImage={commentData.ownerImage} comment={commentData.comment}/>
    )
 

  return (
    <div>
      <button onClick={openModal} className={ownStyle.seeAllCommentsButton}>See all comments: {props.postComments && props.postComments.length}</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

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

export default PostCommentsModal;