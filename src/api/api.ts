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

export const addPostAPI: any = {
  uploadImage(email: string, image: any) {
    return firebase.storage().ref(`images/` + email + `/` + image.name).put(image)
  },
  uploadPostData(email: string, postImage: string, postData: string, uploadTime: string) {

    return firebase.firestore().collection("usersPosts").doc()
    .set({
      name: email,
      postImage: postImage,
      postData: postData,
      uploadTime: uploadTime,
      postComments: [],
      whoLikedPost: []
    });
  },
  // getPostData(email: string) {
  //   return firebase.firestore().collection("usersPosts").doc(email).get()
  // },
  // async getAllPosts() {
  //   const snapshot = await firebase.firestore().collection('usersPosts').get()
  //   return snapshot.docs.map(doc => console.log(doc.data()));
  // }
}
