import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAwZ4W-OWT9ZchJfLjuSfmIPBdV_hsaoNM",
  authDomain: "crown-clothing-93f85.firebaseapp.com",
  projectId: "crown-clothing-93f85",
  storageBucket: "crown-clothing-93f85.appspot.com",
  messagingSenderId: "926960939213",
  appId: "1:926960939213:web:5ebddba318c7cbbfaff984",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
