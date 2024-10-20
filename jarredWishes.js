import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCILXAo6Rf9HG-iREaqQ9p3fxf_idHt3X0",
    authDomain: "designathon-2024.firebaseapp.com",
    projectId: "designathon-2024",
    storageBucket: "designathon-2024.appspot.com",
    messagingSenderId: "834395191086",
    appId: "1:834395191086:web:018241746d1d1f5c0c2cbf",
    measurementId: "G-NRX14E2HYD"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

async function storedWishes() {
    var jar = await db.collection("Users").doc("VvXkQrpX9qe1kWXB8jUi2wYynN52").get().then(doc => doc.get('wishJar'));

    //var jar = await db.collection("Users").doc(firebase.auth().currentUser.uid).get().then(doc => doc.get('wishJar'));
    for (i = 0; i < jar.length; i++) {
        document.innerText = jar[i];
    }
}
