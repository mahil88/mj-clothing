import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
                 apiKey: "AIzaSyDqYw9IJPYDXCrWg-F1xjXECJjAfYDFVlM",
                 authDomain: "crwn-db-1765a.firebaseapp.com",
                 projectId: "crwn-db-1765a",
                 storageBucket: "crwn-db-1765a.appspot.com",
                 messagingSenderId: "1024719336307",
                 appId: "1:1024719336307:web:dd02c43324464b8f64cb06",
                 measurementId: "G-9VKBHP8EBX"
               };

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} =userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creating user',error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

