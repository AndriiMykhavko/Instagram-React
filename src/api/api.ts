import { IAuth, IUserMamage, IManagePost } from './../../types.d';
import * as firebase from "firebase";


export const authAPI: IAuth = {
  login(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },
  registration(email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  },
  logout() {
    return firebase.auth().signOut();
  },
  googleAuth(){
    firebase.auth().getRedirectResult();
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    firebase.auth().signInWithRedirect(provider);
  }
};

export const userMamageAPI: IUserMamage = {
  cnangeUserPhoto(userName: string, image: any){
    firebase.storage().ref(`images/` + userName + `/` + image.name).put(image)
    .on(
      "state_changed",
      () =>{},
      (error: any) => {
        console.log(error);
      },
      () => {
        firebase.storage()
          .ref("images")
          .child(userName + '/' + image.name)
          .getDownloadURL()
          .then((url) => {
            const user = firebase.auth().currentUser;
            if(user != null){
              user.updateProfile({
                photoURL: url
              }).then(function() {
                firebase.auth().updateCurrentUser(user);
              }).catch(function(error) {
                alert("Some error")
              });
            }
          });
      }
    )
  }
}

export const managePostAPI: IManagePost = {
  uploadImage(name: string, image: File) {
    return firebase.storage().ref(`images/` + name + `/` + image.name).put(image)
  },
  uploadPostData(name: string, postImage: string, postData: string, uploadTime: string, userID: string, userPhoto: string) {
    return firebase.firestore().collection("usersPosts")
    .add({
      name: name,
      postImage: postImage,
      postData: postData,
      uploadTime: uploadTime,
      postComments: [],
      whoLikedPost: [],
      userID: userID,
      userPhoto: userPhoto,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
  },
  uploadWhoLikedPostData(postID: string, userID: string) {
    return firebase.firestore().collection("usersPosts").doc(postID)
    .update({
      whoLikedPost: firebase.firestore.FieldValue.arrayUnion(userID)
    })
  },
  uploadWhoDeletedLikedPostData(postID: string, userID: string) {
    return firebase.firestore().collection("usersPosts").doc(postID)
    .update({
      whoLikedPost: firebase.firestore.FieldValue.arrayRemove(userID)
    })
  },
  uploadNewPostComment(postID: string, owner: string, ownerImage: string, comment: string,) {
    return firebase.firestore().collection("usersPosts").doc(postID)
    .update({
      postComments: firebase.firestore.FieldValue.arrayUnion({owner, ownerImage, comment})
    })
  }
}
