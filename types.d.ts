export interface IAuth{
  login: (email: string, password: string) => Promise<firebase.auth.UserCredential>,
  registration: (email: string, password: string) => Promise<firebase.auth.UserCredential>,
  logout: () => Promise<void>,
  googleAuth: () => void
}

export interface IUserMamage{
  cnangeUserPhoto: (userName: string, image: any) => void
}

export interface IManagePost{
  uploadImage: (name: string, image: File) => firebase.storage.UploadTask,
  uploadPostData: (name: string, postImage: string, postData: string, uploadTime: string, userID: string, userPhoto: string) => Promise<firebase.firestore.DocumentReference<firebase.firestore.DocumentData>>,
  uploadWhoLikedPostData: (postID: string, userID: string) => Promise<void>,
  uploadWhoDeletedLikedPostData: (postID: string, userID: string) => Promise<void>,
  uploadNewPostComment: (postID: string, owner: string, ownerImage: string, comment: string,) => Promise<void>
}

export interface IAppProps{
  initialeLoad: state.postsPage.initialeLoad,
  userID: state.auth.userID
}

export interface IAppReduxDispatch{
  logInUser: (userName: string, userID: string, userPhoto: string) => void,
  setPost: (postID: string, postData: {}) => void,
  resetInitialLoad: () => void,
  setNewPost: (postID: string, postData: {}) => void,
  turnOnNewPostNotification: () => void
}

export interface IPost{
  likes: string[],
  owner: string,
  postComments: IComment[],
  postID: string,
  postImg: string,
  postData: string,
  uploadTime: any,
  userID: string,
  ownerImage: string,
}

export interface IPostDispatchRedux{
  likePost: (postID: string, userID: string) => void,
  unlikePost: (postID: string, userID: string) => void
}


export interface IUserPtotoProps{
  headerUserIconOutline?: any,
  headerUserImage?: any,
  userPhoto: string,
  headerUserIcon?: any
}

export interface IProfileProps{
  userName: string,
  userPhoto: string,
  userID: string,
  posts: IPost[],
  isAuth: boolean
}

export interface IProfileDispatchRedux{
  likePost: (postID: string, userID: string) => void,
  unlikePost: (postID: string, userID: string) => void
}

export interface IComment{
  comment: string,
  owner: string,
  ownerImage: string
}

export interface IPost{
  likes: string[],
  owner: string,
  postComments: IComment[],
  postID: string,
  postImg: string,
  postData: string,
  uploadTime: any,
  userID: string,
  ownerImage: string
}

export interface IChangePhotoModalProps{
  userName: string
}

export interface IMainProps{
  isAuth: boolean,
  addedNewPost: boolean,
  newPosts: any[]
}

export interface IMainDispatchRedux{
  turnOffNewPostNotification: () => void,
  resetNewPosts: () => void,
  setPost: (postID: string, postData: any) => void
}

export interface IPostsProps{
  posts: IPost[],
  userID: string,
}

export interface IPostsDispatchRedux{
  likePost: (postID: string, userID: string) => void,
  unlikePost: (postID: string, userID: string) => void
}

export interface IPostCommentsModalProps{
  postComments: IComment[]
}

export interface ICommentsSectionProps{
  postComments: IComment[],
  postID: string,
  owner: string,
}

export interface IAddNewCommentProps{
  postID: string,
  owner: string,
  ownerImage: string
}

export interface IAddNewCommentDispatchRedux{
  addNewComment: (postID: string, owner: string, ownerImage: string, formData: any) => void
}

export interface IHeaderProps{
  userPhoto: string
}

export interface IHeaderDispatchRedux{
  logout: () => void
}

export interface IAddPostModalProps{
  name: string,
  userPhoto: string,
  userID: string
}

export interface IAddPostModalDispatchRedux{
  addPostIntoDB: (userName: string, postImage: File, postData: string, userID: string, userPhoto: string) => void
}