import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBs2WJlVsRQSjRlcoiibpnLS_GVflAW8YQ",
    authDomain: "climb-it-application.firebaseapp.com",
    databaseURL: "https://climb-it-application.firebaseio.com",
    projectId: "climb-it-application",
    storageBucket: "climb-it-application.appspot.com",
    messagingSenderId: "816646032210",
    appId: "1:816646032210:web:7c075cb596ea60d6"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;
