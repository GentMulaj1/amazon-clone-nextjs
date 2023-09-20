import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAtWYSNATHzOcUnc80ZLli5dAbuSjpBYy4",
    authDomain: "clone-nextjs-b7bbc.firebaseapp.com",
    projectId: "clone-nextjs-b7bbc",
    storageBucket: "clone-nextjs-b7bbc.appspot.com",
    messagingSenderId: "491208630823",
    appId: "1:491208630823:web:9debc501c1d08c52b6a402"
};

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// const app = !firebase.app.length 
// ? firebase.initializeApp(firebaseConfig) 
// : firebase.app;

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export default db






