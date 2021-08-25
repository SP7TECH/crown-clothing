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

export const createProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userReference = firestore.doc(`/users/${userAuth.id}`);
  const snapshot = await userReference.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;

    const createAt = Date();

    try {
      await userReference.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("Error creating user " + err.message);
    }
  }
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
