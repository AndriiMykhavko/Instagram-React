// import axios from "axios";
import * as firebase from "firebase";

export const authAPI = {
  login(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  },
  registration(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  },
  logout() {
    return firebase.auth().signOut();
  },
};
