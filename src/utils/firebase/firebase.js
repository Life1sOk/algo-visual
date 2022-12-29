import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

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

// Auth //
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
// ---------------- ------------------ ---------------- //

// Plan //

export const getUsersDocsDaily = async (uid) => {
    if (!uid) return;

    const getDocRef = doc(db, 'users', uid, 'quests', 'daily');
    const datas = await getDoc(getDocRef);

    return datas.data();
};

export const setUsersDatasDaily = async (uid, datasToAdd, type) => {
    if (!uid) return;

    const docRef = (db, doc(db, 'users', uid, 'quests', 'daily'));

    try {
        if(type === 'main') await setDoc(docRef, { main: datasToAdd }, {merge: true});
        if(type === 'secondary') await setDoc(docRef, { secondary: datasToAdd }, {merge: true});

        console.log('datas ready')
    } catch (error) {
        console.log('oops, here is some error', error);
    }
};

export const addUsersData = async (uid, datasToAdd, type) => {
    if (!uid) return;

    const docRef = doc(db, 'users', uid, 'quests', type);

    try {
        await setDoc(docRef, {quests: arrayUnion(datasToAdd)}, {merge: true});

        console.log('ToDo combined');
    } catch (error) {
        console.log('oops, here is some error', error);
    }
};

export const deleteUsersData = async (uid, datasToDelete, type) => {
    if (!uid) return;

    const docRefComb = doc(db, 'users', uid, 'quests', type);

    try {
        await updateDoc(docRefComb, {quests: arrayRemove(datasToDelete)});

        console.log('ToDo deleted');
    } catch (error) {
        console.log('oops, here is some error', error);
    }
};

// Quests //
export const getAllQuests = async (uid) => {
    if (!uid) return;

    const getDocRef = doc(db, 'users', uid, 'quests', 'combinedAreas');
    const datas = await getDoc(getDocRef);

    if(datas.exists()) {
        return datas.data();
    } else {
        return {active: [], done: [], expired: []};
    }
};

export const addQuestServer = async (uid, datasToAdd, type) => {
    if (!uid) return;

    const docRef = doc(db, 'users', uid, 'quests', 'combinedAreas');

    try {
        if(type === 'active') await setDoc(docRef, {active: arrayUnion(datasToAdd)}, {merge: true});
        if(type === 'done') await setDoc(docRef, {done: arrayUnion(datasToAdd)}, {merge: true});
        if(type === 'expired') await setDoc(docRef, {expired: arrayUnion(datasToAdd)}, {merge: true});

        console.log('datas combined')
    } catch (error) {
        console.log('oops, here is some error', error);
    }
};

export const deleteQuestServer = async (uid, quest, type) => {
    if (!uid) return;

    const docRefComb = doc(db, 'users', uid, 'quests', 'combinedAreas');

    try {
        if(type === 'active') await updateDoc(docRefComb, {active: arrayRemove(quest)});
        if(type === 'done') await updateDoc(docRefComb, {done: arrayRemove(quest)});
        if(type === 'expired') await updateDoc(docRefComb, {expired: arrayRemove(quest)});

        console.log('data deleted');
    } catch (error) {
        console.log('oops, here is some error', error);
    }
};

// ---------------- ------------------ ---------------- //

// Areas //
export const getUsersDocsAreas = async (uid, type) => {
    if (!uid) return;

    const getDocRef = doc(db, 'users', uid, 'areas', type);
    const datas = await getDoc(getDocRef);

    if(datas.exists()) {
        return datas.data();
    }
}

// Parts //
export const setAreasPartsCircle = async (uid, area, datasToUp, merge) => {
    if (!uid || !area) return;

    const docRef = doc(db, 'users', uid, 'areas', area);

    try {
        await setDoc(docRef, datasToUp, {merge: merge});
        console.log('done digi don')
    } catch (error) {
        console.log('oops, here is some error', error);
    }
}

export const updateAreasPartsCircle = async (uid, area, datasToUp) => {
    if (!uid || !area) return;

    const docRef = doc(db, 'users', uid, 'areas', area);

    try {
        await updateDoc(docRef, { parts: datasToUp});
        console.log('done digi don')
    } catch (error) {
        console.log('oops, here is some error', error);
    }
}


// Statistic //
export const updateAreasStatistic = async (uid, area, datasToUp) => {
    if(!uid || !area || !datasToUp) return;

    const docRef = doc(db, 'users', uid, 'areas', area);

    try {
        await updateDoc(docRef, {statistic: datasToUp});
        console.log('done digi don');
    } catch (error) {
        console.log('oops, here is some error', error);
    }
}

// ---------------- ------------------ ---------------- //

// Update //

export const tryUpdateData = async (uid) => {
    if (!uid) return;

    const getDocRef = doc(db, 'users', uid);
    const datas = await getDoc(getDocRef);

    // await updateDoc(getDocRef, {
    //     'all': arrayRemove({ bay: 1232, hello: '123' })
    // });

    // await updateDoc(getDocRef, {
    //     'check': arrayUnion({ hello: 'hello' }, { bay: 'bay' })
    // });

    console.log(datas.data());
}