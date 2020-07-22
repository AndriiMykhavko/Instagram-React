import { addPostAPI } from "../api/api";
import { storage } from "../index";

const SET_POST = "SET_POST";
const SET_COMMENT = "SET_COMMENT"

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
        postComments: action.postData.postComments 
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
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

export const setCommetn = (comments: any) => ({
  type: SET_COMMENT,
  comments
});

export const addPostIntoDB = (email: string, postImage: any, postData: string) => (dispatch: any) => {
  addPostAPI
    .uploadImage(email, postImage)
    .on(
      "state_changed",
      (snapshot:any) =>{},
      (error: any) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(email + '/' + postImage.name)
          .getDownloadURL()
          .then((url) => {
            var todayDate = new Date();
            var currYear = todayDate.getFullYear();
            var currMonth = todayDate.getMonth()+1;
            var currDay = todayDate.getDate();
            const currHour = todayDate.getHours();
            const currMinutes = todayDate.getMinutes();
            const currSeconds = todayDate.getSeconds();
            
            const time = currDay + '/' + currMonth + '/' + currYear + ' ' + currHour + ':' + currMinutes + ':' + currSeconds
            
            addPostAPI
            .uploadPostData(email, url, postData, time)
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