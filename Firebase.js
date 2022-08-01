// Import the functions you need from the SDKs you need
import * as firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWBw0tSOjbWQxhL0ztN3bmkBrFI-M5kug",
  authDomain: "university-app-3b26b.firebaseapp.com",
  databaseURL: "https://university-app-3b26b-default-rtdb.firebaseio.com",
  projectId: "university-app-3b26b",
  storageBucket: "university-app-3b26b.appspot.com",
  messagingSenderId: "955564457635",
  appId: "1:955564457635:web:4f4cb508868623ecfd0916"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0){

    app = firebase.initializeApp(firebaseConfig)

} 
else{
    app = firebase.app()

}
const auth = firebase.auth()
const db = firebase.firestore();
 const storage = firebase.storage()
 

export{auth,db,storage};