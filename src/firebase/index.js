import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp ({
    apiKey: "AIzaSyBCuQ0wMFsWWWiRmcMLM5s7B-TSyIYQmbc",
    authDomain: "creativa-fe7ab.firebaseapp.com",
    projectId: "creativa-fe7ab",
    storageBucket: "creativa-fe7ab.appspot.com",
    messagingSenderId: "1026060960918",
    appId: "1:1026060960918:web:7b8f629859fc9d0742eeb7"
})

export const getFirebase = () => app

export const getFirestore = () => firebase.firestore(app)