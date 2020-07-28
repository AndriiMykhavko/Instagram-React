import { managePostAPI } from './../../api/api';
import types from './types'
import { storage } from '../../index'

export const actionCreator = (type: string, payload: any ) => ({
  type,
  payload 
})


export const setPost = (postID: string, postData: any) => (dispatch: any) => {
  dispatch(actionCreator(types.SET_POST, {postID, postData}))
}

export const turnOnNewPostNotification = (addedNewPost = true) => (dispatch: any) => {
  dispatch(actionCreator(types.TURN_ON_NEW_POST, {addedNewPost}))
}
export const turnOffNewPostNotification = (addedNewPost = false) => (dispatch: any) => {
  dispatch(actionCreator(types.TURN_OFF_NEW_POST, {addedNewPost}))
}

export const setNewPost = (postID: string, postData: any) => (dispatch: any) => {
  dispatch(actionCreator(types.SET_NEW_POST, {postID, postData}))
}

export const resetInitialLoad = (stateOfLoad = false) => (dispatch: any) => {
  dispatch(actionCreator(types.RESET_INITIALE_LOAD, {stateOfLoad}))
}
export const resetNewPosts = () => ({
  type: types.RESET_NEW_POSTS,
});

export const likePost = (postID: string, userID: string) => (dispatch: any) => {
  managePostAPI
  .uploadWhoLikedPostData(postID, userID)
}

export const unlikePost = (postID: string, userID: string) => (dispatch: any) => {
  managePostAPI
  .uploadWhoDeletedLikedPostData(postID, userID)
}

export const addCommetnIntoDB = (postID: string, owner: string, comment: string) => {
  managePostAPI
  .uploadNewPostComment(postID, owner, comment)
};

export const addPostIntoDB = (name: string, postImage: any, postData: string) => {
  managePostAPI
    .uploadImage(name, postImage)
    .on(
      "state_changed",
      (snapshot:any) =>{},
      (error: any) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(name + '/' + postImage.name)
          .getDownloadURL()
          .then((url) => {

            const now = new Date().toLocaleString();
            managePostAPI
            .uploadPostData(name, url, postData, now)
            .then(
             
            )
          });
      }
    )
};