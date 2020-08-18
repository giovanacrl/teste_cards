import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyATMdiOJkPGoEZIND7lo08xuC17OLcv_rk",
    authDomain: "eventos-e3e7a.firebaseapp.com",
    databaseURL: "https://eventos-e3e7a.firebaseio.com",
    projectId: "eventos-e3e7a",
    storageBucket: "eventos-e3e7a.appspot.com",
    messagingSenderId: "519761849012",
    appId: "1:519761849012:web:05d48957626511b1e205e1"
  };

   // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);