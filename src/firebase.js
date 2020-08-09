import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyBYHr9ySTtvuXmdIEA7aJCPOe75nY6bLrs',
  authDomain: 'react-trello-e5b28.firebaseapp.com',
  databaseURL: 'https://react-trello-e5b28.firebaseio.com',
  projectId: 'react-trello-e5b28',
  storageBucket: 'react-trello-e5b28.appspot.com',
  messagingSenderId: '538273641693',
  appId: '1:538273641693:web:44e7966f4f264c0abe5734',
};

firebase.initializeApp(config);

const db = firebase.firestore();

const boardsRef = db.collection('boards');
const listsRef = db.collection('lists');
const cardsRef = db.collection('cards');

export { boardsRef, listsRef, cardsRef };
