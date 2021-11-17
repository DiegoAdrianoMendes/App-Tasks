// Import the functions you need from the SDKs you need
import * as firebase from "firebase";

import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA4fPhXsJEMeZgJxoxqgQk8aGf9kUAcUS8",
  authDomain: "app-tasks-react-native.firebaseapp.com",
  projectId: "app-tasks-react-native",
  storageBucket: "app-tasks-react-native.appspot.com",
  messagingSenderId: "799792785716",
  appId: "1:799792785716:web:fbede57ec9027f58ce5d61",
  measurementId: "G-GHLPLL28H9"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app();
}

export const auth = firebase.auth();