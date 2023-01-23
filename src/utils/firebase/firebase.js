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

// Var
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

// ---------------- Firebase Authentication ---------------- //

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

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);
// ---------------- ------------------ ---------------- //

// ---------------- Firebase Firestore ---------------- //

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

// Quests daily //

export const getUsersDocsDailyCalendar = async (uid, currentDay) => {
    if (!uid || !currentDay) return;

    const { monthStr, year } = currentDay;

    const getDocRef = doc(db, 'users', uid, 'quests', 'daily', `${monthStr} ${year}`, `calendar`);

    const datas = await getDoc(getDocRef);

    return datas.data();
};

export const getUsersDocsDaily = async (uid, currentDay) => {
    if (!uid || !currentDay) return;

    const { monthStr, year, number } = currentDay;

    const getDocRef = doc(db, 'users', uid, 'quests', 'daily', `${monthStr} ${year}`, `${number}`);

    const datas = await getDoc(getDocRef);

    return datas.data();
};

export const setUsersDatasDaily = async (uid, datasToAdd) => {
    if (!uid) return;

    const { type, year, month, monthStr, number, datas } = datasToAdd;

    const docRefDatas = (db, doc(db, 'users', uid, 'quests', 'daily', `${monthStr} ${year}`, `${number}`));
    const docRefCalendar = (db, doc(db, 'users', uid, 'quests', 'daily', `${monthStr} ${year}`, 'calendar'));

    const calendarDay = { day: number, month, monthStr, year, main: 'planned', secondary: false };

    try {
        if(type === 'main') {
            await setDoc(docRefDatas, { main: datas }, {merge: true});
            await setDoc(docRefCalendar, { days: arrayUnion(calendarDay)} , {merge: true});
        }
        if(type === 'secondary') {
            await setDoc(docRefDatas, { secondary: datas }, {merge: true});
            await setDoc(docRefCalendar, { days: arrayUnion(calendarDay)}, {merge: true});
        }

        console.log('datas ready')
    } catch (error) {
        console.log('oops, here is some error', error);
    }
};

export const addUsersData = async (uid, datasToAdd, uppdated) => {
    if (!uid) return;

    const { type, year, monthStr, number } = datasToAdd;

    const docRef = doc(db, 'users', uid, 'quests', 'daily', `${monthStr} ${year}`, `${number}`);

    try {
        if(type === 'main') await setDoc(docRef, { main: arrayUnion(uppdated) }, {merge: true});
        if(type === 'secondary') await setDoc(docRef, { secondary: arrayUnion(uppdated) }, {merge: true});

        console.log('ToDo combined');
    } catch (error) {
        console.log('oops, here is some error', error);
    }
};

export const deleteUsersData = async (uid, datasToDelete, old) => {
    if (!uid) return;

    const { type, year, monthStr, number } = datasToDelete;

    const docRefComb = doc(db, 'users', uid, 'quests', 'daily', `${monthStr} ${year}`, `${number}`);

    try {
        if(type === 'main') await updateDoc(docRefComb, {main: arrayRemove(old)});
        if(type === 'secondary') await updateDoc(docRefComb, {secondary: arrayRemove(old)});

        console.log('ToDo deleted');
    } catch (error) {
        console.log('oops, here is some error', error);
    }
};

export const addNewCalendarDay = async (uid, findMonth, uppdated) => {
    if (!uid) return;

    const { monthStr, year } = findMonth;

    const docRefCalendar = (db, doc(db, 'users', uid, 'quests', 'daily', `${monthStr} ${year}`, 'calendar'));

    try {
        await setDoc(docRefCalendar, { days: arrayUnion(uppdated) }, {merge: true});
        console.log('day uppdated');
    } catch (error) {
        console.log('oops, here is some error', error);
    }
};

export const deleteCalendarDay = async (uid, findMonth, old) => {
    if (!uid) return;

    const { monthStr, year } = findMonth;

    const docRefCalendar = (db, doc(db, 'users', uid, 'quests', 'daily', `${monthStr} ${year}`, 'calendar'));

    try {
        await updateDoc(docRefCalendar, { days: arrayRemove(old)});
        console.log('day old');
    } catch (error) {
        console.log('oops, here is some error', error);
    }
};
// ---------------- ------------------ ---------------- //

// Quests combinedAreas//
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

        console.log('datas combined');
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
};

export const setAreasPartsCircle = async (uid, area, datasToUp, merge) => {
    if (!uid || !area) return;

    const docRef = doc(db, 'users', uid, 'areas', area);

    try {
        await setDoc(docRef, datasToUp, {merge: merge});
        console.log('done digi don')
    } catch (error) {
        console.log('oops, here is some error', error);
    }
};
// ---------------- ------------------ ---------------- //

// Main extra //

export const getMainExtraLinks = async (uid) => {
    if(!uid) return;

    const docRef = doc(db, 'users', uid, 'main', 'links');
    const datas = await getDoc(docRef);

    if(datas.exists()) {
        return datas.data();
    }
};

export const setMainExtraLinks = async (uid, datasToAdd) => {
    if(!uid) return;

    const docRef = doc(db, 'users', uid, 'main', 'links');

    try {
        await setDoc(docRef, {data: arrayUnion(datasToAdd)}, { merge: true });
        console.log('links done');
    } catch(error) {
        console.log('some links error', error);
    }
};

export const deleteMainExtraLinks = async (uid, toDelete) => {
    if(!uid) return;

    const docRef = doc(db, 'users', uid, 'main', 'links');

    try {
        await updateDoc(docRef, {data: arrayRemove(toDelete)});
        console.log('deleted link! ok');
    } catch (error) {
        console.log('fail link delete')
    };
};

// ---------------- ------------------ ---------------- //