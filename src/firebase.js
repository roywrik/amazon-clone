import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZmvyXAqqqwRQVg-wQkPI7jRz3pms4zrg",
    authDomain: "fir-4fe76.firebaseapp.com",
    projectId: "fir-4fe76",
    storageBucket: "fir-4fe76.appspot.com",
    messagingSenderId: "451686072738",
    appId: "1:451686072738:web:d6b8f65d286aa81acbb2fb",
    measurementId: "G-PD3RE6YJ86"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };