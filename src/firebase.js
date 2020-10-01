import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZX86OshhNo98pTi-FTO85rdD5yDVnWsw",
    authDomain: "facebook-clone-e9d05.firebaseapp.com",
    databaseURL: "https://facebook-clone-e9d05.firebaseio.com",
    projectId: "facebook-clone-e9d05",
    storageBucket: "facebook-clone-e9d05.appspot.com",
    messagingSenderId: "718761066063",
    appId: "1:718761066063:web:01684d3974eec624df343a",
    measurementId: "G-25FJZWJSBZ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

//Explicit export
export { auth, provider };
//Default export
export default db;