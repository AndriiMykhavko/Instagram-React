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
