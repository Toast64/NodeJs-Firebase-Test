const firebase = require("firebase");


// Initialize Firebase with configuration data
const firebaseConfig = {
    apiKey: "AIzaSyBKU-1GJECCNENOAzSZsssR2ICmyxfRPXA",
    authDomain: "codeminimalist-test.firebaseapp.com",
    databaseURL: "https://codeminimalist-test-default-rtdb.firebaseio.com",
    projectId: "codeminimalist-test",
    storageBucket: "codeminimalist-test.appspot.com",
    messagingSenderId: "506037761028",
    appId: "1:506037761028:web:192fbd051003dad22f3151"
};
firebase.initializeApp(firebaseConfig); 

// Get a reference to the database service
const db = firebase.firestore();

// Get a reference to the storage service, which is used to create references in your storage bucket
const User = db.collection("Users");

module.exports = User;