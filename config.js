import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyBnNloWw5-X4G1xjFCxMsojZfEYHmeKjPQ",
  authDomain: "book-santa-3232c.firebaseapp.com",
  databaseURL: "https://book-santa-3232c.firebaseio.com",
  projectId: "book-santa-3232c",
  storageBucket: "book-santa-3232c.appspot.com",
  messagingSenderId: "767097497958",
  appId: "1:767097497958:web:dc2efb53ab2a2a028b80a7"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
