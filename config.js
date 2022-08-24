import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAraWC9sR9tkt3HBmkBgIK5cngJkS3HwHA",
    authDomain: "project-71-3d545.firebaseapp.com",
    projectId: "project-71-3d545",
    storageBucket: "project-71-3d545.appspot.com",
    messagingSenderId: "95010873453",
    appId: "1:95010873453:web:ee6a7c502b7ed6d7a01f64"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
