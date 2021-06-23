import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyAG7x6QjocJYAjlSFq6xdJe3HzmksmHSKo',
    authDomain: 'socialapp-b4a4d.firebaseapp.com',
    projectId: 'socialapp-b4a4d',
    storageBucket: 'socialapp-b4a4d.appspot.com',
    messagingSenderId: '94682707953',
    appId: '1:94682707953:web:18fa7f2961547e6d473650'
};

try {
    firebase.initializeApp(firebaseConfig);
} catch (err) {
    //console.log(err);
}

const firebaseApp = firebase;
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider, db };
