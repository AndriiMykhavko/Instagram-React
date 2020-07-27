// import axios from "axios";
import * as firebase from "firebase";


export const authAPI: any = {
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
        // Using a redirect.
    firebase.auth().getRedirectResult().then(function(result: any) {
      if (result.credential) {
        // This gives you a Google Access Token.
        let token = result.credential.accessToken;
      }
      let user = result.user;
    });

    // Start a sign in process for an unauthenticated user.
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    firebase.auth().signInWithRedirect(provider);
  }
};

export const managePostAPI: any = {
  uploadImage(name: string, image: any) {
    return firebase.storage().ref(`images/` + name + `/` + image.name).put(image)
  },
  uploadPostData(name: string, postImage: string, postData: string, uploadTime: string) {

    return firebase.firestore().collection("usersPosts").doc()
    .set({
      name: name,
      postImage: postImage,
      postData: postData,
      uploadTime: uploadTime,
      postComments: [],
      whoLikedPost: []
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
  uploadNewPostComment(postID: string, owner: string, comment: string) {
    return firebase.firestore().collection("usersPosts").doc(postID)
    .update({
      postComments: firebase.firestore.FieldValue.arrayUnion({owner, comment})
    })
  }
  // getPostData(email: string) {
  //   return firebase.firestore().collection("usersPosts").doc(email).get()
  // },
  // async getAllPosts() {
  //   const snapshot = await firebase.firestore().collection('usersPosts').get()
  //   return snapshot.docs.map(doc => console.log(doc.data()));
  // }
}
