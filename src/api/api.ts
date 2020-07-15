// import axios from "axios";
import * as firebase from "firebase";

export const authAPI = {
  login(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },
  registration(email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  },
  logout() {
    return firebase.auth().signOut();
  },
};
