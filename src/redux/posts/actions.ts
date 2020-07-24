import types from './types'
import { managePostAPI } from '../../api/api'
import { storage } from '../../index'

export const actionCreater = (type: string, payload: any ) => ({
  type,
  payload 
})


export const setPost = (postID: string, postData: any) => (dispatch: any) => {
  dispatch(actionCreater(types.SET_POST, {postID, postData}))
}

export const resetPosts = () => ({
  type: types.RESET_POSTS,
});

export const likePost = (postID: string, userID: string) => (dispatch: any) => {
  //debugger
  managePostAPI
  .uploadWhoLikedPostData(postID, userID)
}

export const unlikePost = (postID: string, userID: string) => (dispatch: any) => {
  managePostAPI
  .uploadWhoDeletedLikedPostData(postID, userID)
}

export const setCommetn = (comments: any) => ({
  type: types.SET_COMMENT,
  comments
});

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