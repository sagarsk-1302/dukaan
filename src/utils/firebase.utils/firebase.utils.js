import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {
  getFirestore,
  getDoc,
  setDoc,
  doc
} from 'firebase/firestore'
import { createSearchParams } from "react-router-dom";


const firebaseConfig = {
  apiKey: "AIzaSyCjVuRHJ7J9mWdBphL3CAGUe--yVfW_cc4",
  authDomain: "dukaan-sk.firebaseapp.com",
  projectId: "dukaan-sk",
  storageBucket: "dukaan-sk.appspot.com",
  messagingSenderId: "206305973910",
  appId: "1:206305973910:web:399830424d165417f954b7"
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth()
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt:"select_account"
})

export const signInWithGooglePopup =() => signInWithPopup(auth,provider)


const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) =>{
  const userDocRef = await doc(db, 'users', userAuth.uid)
  
  const userSnapShot = await getDoc(userDocRef)
  if(!userSnapShot.exists()){
    try{
      const {displayName,email} = userAuth;
      const date = new Date();
      await setDoc(userDocRef,{
        displayName,
        email,
        date
      })
    }catch(error){
      console.log("error",error.message);
    }
  }

  return userDocRef;

}