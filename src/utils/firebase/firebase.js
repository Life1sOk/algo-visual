import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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

// ---------------- Firebase Authentication ---------------- //
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

export const signOutHandler = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => {
    return onAuthStateChanged(auth, callback)
}
// ---------------- ------------------ ---------------- //


// ---------------- Firebase Firestore ---------------- //
const db = getFirestore(firebaseApp);

export const createUsersDocumentsFromAuth = async (userAuth) => {
    if (!userAuth) return;
    const { email, uid } = userAuth;

    const getDocRef = doc(db, 'users', uid);
    const checkUser = await getDoc(getDocRef);

    if (!checkUser.exists()) {
        const createdAt = new Date();

        const userToAdd = {
            createdAt,
            email,
            uid,
        }

        try {
            await setDoc(getDocRef, userToAdd);
            console.log('done')
        } catch (error) {
            console.log('oops, here is some error', error);
        }
    }
}

export const getUsersDocsDaily = async (uid) => {
    if (!uid) return;

    const getDocRef = doc(db, 'users', uid, 'quests', 'daily');
    const datas = await getDoc(getDocRef);

    return datas.data().quests;
}

export const getUsersDocsOutPlan = async (uid) => {
    if (!uid) return;

    const getDocRef = doc(db, 'users', uid, 'quests', 'outDaily');
    const datas = await getDoc(getDocRef);

    return datas.data().quests;
}

export const setUsersDatasDaily = async (uid, datasToAdd) => {
    if (!uid) return;

    const docRef = (db, doc(db, 'users', uid, 'quests', 'daily'))

    try {
        await setDoc(docRef, {
            quests: datasToAdd,
        });
        console.log('datas ready')
    } catch (error) {
        console.log('oops, here is some error', error);
    }
}

export const setUsersDatasOutDaily = async (uid, datasToAdd) => {
    if (!uid) return;

    const docRef = (db, doc(db, 'users', uid, 'quests', 'outDaily'))

    try {
        await setDoc(docRef, {
            quests: datasToAdd,
        });
        console.log('datas ready')
    } catch (error) {
        console.log('oops, here is some error', error);
    }
}
// ---------------- ------------------ ---------------- //

