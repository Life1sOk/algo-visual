import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB4KW3hNs1uaX28D1uIMB98rWj_w-KSTJM",
    authDomain: "areas-todo.firebaseapp.com",
    projectId: "areas-todo",
    storageBucket: "areas-todo.appspot.com",
    messagingSenderId: "218414967423",
    appId: "1:218414967423:web:af1f16451733999d81ed4a",
    measurementId: "G-CKMWF1BM08"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

export const createUserWithEaP = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const currentUser = userCredential.user;
        console.log(currentUser, 'all ok');
        console.log(userCredential, 'credential')
    } catch (error) {
        console.log('ooops, errors', error)
    }
}

export const signInWithEaP = async (email, password) => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        console.log(user)
    } catch (error) {
        console.log('ooops, errors', error)
    }
}

export const signOutHandler = async () => {
    const resp = await signOut(auth);
    console.log(resp, 'out')
} 