import firebase from 'firebase/APP'
import 'firebase/auth'
var firebaseConfig = {
    
  };
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  //exporter bd
  export default fireDB;
  //export auth app
  export const auth = app.auth();
