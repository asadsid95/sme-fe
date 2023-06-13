import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC63bhxUc3C0Bn5CEfOI5XWtbGmVDtAr_A",
    authDomain: "eleetcode-abafe.firebaseapp.com",
    projectId: "eleetcode-abafe",
    storageBucket: "eleetcode-abafe.appspot.com",
    messagingSenderId: "848528032285",
    appId: "1:848528032285:web:f1be75d087acaf56e93cf4",
    measurementId: "G-2FFVMXV1W9"
};

const app = initializeApp(firebaseConfig);

export default function fb() {
    console.log(app)
}