import types from './types'

const initialState = {
  posts: [],
  initialeLoad: true,
  addedNewPost: false,
  newPosts: [] 
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
        ...state,
        // posts: [...state.posts, newPost],
        posts: [newPost, ...state.posts ],
      };
    }
    case types.TURN_ON_NEW_POST: {
      return {
        ...state,
        addedNewPost: action.payload.addedNewPost
      }
    }
    case types.TURN_OFF_NEW_POST: {
      return {
        ...state,
        addedNewPost: action.payload.addedNewPost
      }
    }
    case types.SET_NEW_POST: {
      const payload = action.payload
      return {
        ...state,
        newPosts: [payload, ...state.newPosts ],
      }
    }
    case types.RESET_INITIALE_LOAD: {
      return {
        ...state,
        initialeLoad: action.payload.stateOfLoad
      }
    }
    case types.RESET_NEW_POSTS: {
      return{
        ...state,
        newPosts: []
      }
    }
    default:
      return state;
  }
};