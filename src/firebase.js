import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAZ41BO_1YRg5bMOl6iOea9dnzQZGTtrlA",
  authDomain: "disneyplus-clone-419b3.firebaseapp.com",
  projectId: "disneyplus-clone-419b3",
  storageBucket: "disneyplus-clone-419b3.appspot.com",
  messagingSenderId: "730967329166",
  appId: "1:730967329166:web:0f6cea9b07e03863f2bcdf"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;