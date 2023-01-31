import firebase from 'firebase';

const firebaseConfig =
 {
  apiKey: "AIzaSyCt8v3h1CsEl23fz1VqnMH_Ms8-Jt0XRqA",
  authDomain: "fir-afbad.firebaseapp.com",
  databaseURL: "https://fir-afbad-default-rtdb.firebaseio.com",
  projectId: "fir-afbad",
  storageBucket: "fir-afbad.appspot.com",
  messagingSenderId: "337126575450",
  appId: "1:337126575450:web:3dfb5942fa19b6b6ce3763",
  measurementId: "G-FJP0YHYJRT"
};


firebase.initializeApp(firebaseConfig);
var database=firebase.database();
var storage=firebase.storage();
export default database;
export {storage} ;

