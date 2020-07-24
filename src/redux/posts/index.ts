import types from './types'

const initialState = {
  posts: [] 
};

export const postsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.SET_POST: {
      const payload = action.payload
      let newPost = {
        postID: payload.postID,
        owner: payload.postData.name,
        postImg: payload.postData.postImage,
        postData: payload.postData.postData,
        likes: payload.postData.whoLikedPost,
        postComments: payload.postData.postComments,
        uploadTime: payload.postData.uploadTime
      }
      return {
        //...state,
        // posts: [...state.posts, newPost],
        posts: [...state.posts, newPost],
      };
    }
    case types.RESET_POSTS: {
      return{
        posts: []
      }
    }
    case types.SET_COMMENT: {
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