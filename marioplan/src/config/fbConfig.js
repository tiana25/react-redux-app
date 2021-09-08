import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyABfshea3Cg3ajBB70DNKX8ztQu5HlazhI",
    authDomain: "react-redux-app-marioplan.firebaseapp.com",
    projectId: "react-redux-app-marioplan",
    storageBucket: "react-redux-app-marioplan.appspot.com",
    messagingSenderId: "80373269413",
    appId: "1:80373269413:web:3c1f9b214a42dc4fce9e4c"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;

