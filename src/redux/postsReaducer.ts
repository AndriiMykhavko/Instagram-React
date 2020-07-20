const SET_POST = "SET_POST";
const SET_COMMENT = "SET_COMMENT"

const initialState = {
  posts: [] 
};

export const postsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_POST: {
      let newPost = {
        // id: action.id,
        // ownerImg: action.ownerImg,
        // owner: action.owner,
        // img: action.img,
        // message: action.newPostText,
        // like: action.like,
        // likesCounter: action.likesCounter,
        // comments: []
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
        // newPostText: "",
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

export const setPost = () => ({
  type: SET_POST,
});

export const setCommetn = (comments: any) => ({
  type: SET_COMMENT,
  comments
});