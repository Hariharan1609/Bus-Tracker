const { initializeApp } = require("firebase/app");
const { getAnalytics } = require("firebase/analytics");
const { getDatabase, ref, child, get,onValue } = require("firebase/database");
const { getFirestore, doc,getDoc} = require("firebase/firestore");


const firebaseConfig = {
    apiKey: "AIzaSyBTPocirA2780dKVRJN39eH2CA-CFS4YOQ",
    authDomain: "bustrackerproject-4b0d4.firebaseapp.com",
    databaseURL: "https://bustrackerproject-4b0d4-default-rtdb.firebaseio.com",
    projectId: "bustrackerproject-4b0d4",
    storageBucket: "bustrackerproject-4b0d4.appspot.com",
    messagingSenderId: "253245996193",
    appId: "1:253245996193:web:8aaae455f1ba124dc3c4e0",
    measurementId: "G-ELM1BEK3HW"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const a=[]

