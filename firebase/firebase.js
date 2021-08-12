import firebase from "firebase";
import "firebase/auth";
import "firebase/storage";


// import {
//     FIREBASE_API_KEY,
//     FIREBASE_AUTH_DOMAIN,
//     FIREBASE_PROJECT_ID,
//     FIREBASE_STORAGE_BUCKET,
//     FIREBASE_MESSAGING_SENDER_ID,
//     FIREBASE_APP_ID,
//     FIREBASE_MEASUREMENT_ID
// } from "@env";

const FIREBASE_API_KEY='AIzaSyDJ_HyA4XkDLtVTACOEX4r_ttMeCpDlJ5w'
const FIREBASE_AUTH_DOMAIN='cat-pitaloneses.firebaseapp.com'
const FIREBASE_PROJECT_ID='cat-pitaloneses'
const FIREBASE_STORAGE_BUCKET='cat-pitaloneses.appspot.com'
const FIREBASE_MESSAGING_SENDER_ID='673048356654'
const FIREBASE_APP_ID='1:673048356654:web:fb944092cb9fe7064cbcbf'
const FIREBASE_MEASUREMENT_ID='G-28W7X9C8N6'


const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
    appId: FIREBASE_APP_ID,
    measurementId: FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData 
            });
        } catch (e) {
            console.log('error creating user', e.message);
        }
    }
    return userRef;
}

export const auth = firebase.auth();
export const storage = firebase.storage();

export default firebase;