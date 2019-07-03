import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBs2WJlVsRQSjRlcoiibpnLS_GVflAW8YQ",
    authDomain: "climb-it-application.firebaseapp.com",
    databaseURL: "https://climb-it-application.firebaseio.com",
    projectId: "climb-it-application",
    storageBucket: "climb-it-application.appspot.com",
    messagingSenderId: "816646032210",
    appId: "1:816646032210:web:7c075cb596ea60d6"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsSnapshots: true })

export default firebase;
