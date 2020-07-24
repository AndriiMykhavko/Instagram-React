import { managePostAPI } from "../api/api";
import { storage } from "../index";

const SET_POST = "SET_POST";
const SET_COMMENT = "SET_COMMENT"
const RESET_POSTS = "RESET_POSTS"

const initialState = {
  posts: [] 
};

export const postsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_POST: {
      // console.log(action.postData)
      // debugger
      let newPost = {
        postID: action.postID,
        owner: action.postData.name,
        postImg: action.postData.postImage,
        postData: action.postData.postData,
        likes: action.postData.whoLikedPost,
        postComments: action.postData.postComments,
        uploadTime: action.postData.uploadTime
      }
      return {
        //...state,
        // posts: [...state.posts, newPost],
        posts: [...state.posts, newPost],
      };
    }
    case RESET_POSTS: {
      return{
        posts: []
      }
    }
    case SET_COMMENT: {
      return {
        // let newComment = {
      //   id: action.commentId,
      //   ownerImg: action.commentOwnerImg,
      //   ownerName: action.commentOwnerName,
      //   comment: action.commentText
      // }
      };
    }
    default:
      return state;
  }
};

export const setPost = (postID: string, postData: {}) => ({
  type: SET_POST,
  postID,
  postData
});

export const resetPosts = () => ({
  type: RESET_POSTS,
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
  type: SET_COMMENT,
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
              //  addPostAPI
              //  .getAllPosts()
            // .getPostData(email)
          //   .then(function(doc: any) {
          //     if (doc.exists) {
          //         console.log("Document data:", doc.data());
          //     } else {
          //         // doc.data() will be undefined in this case
          //         console.log("No such document!");
          //     }
          // }).catch(function(error: any) {
          //     console.log("Error getting document:", error);
          // })
            )
          });
      }
    )

    // .then((response: any) => {
    //   if(response.user.email.length !== 0) {
    //     // dispatch(logInUser())
    //   }
    //   console.log(response)
    // })
    // .catch((error: any) => alert(error));
};