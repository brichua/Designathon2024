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

async function login() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const rememberMe = document.getElementById("remember-me").checked;

    const persistence = rememberMe ? firebase.auth.Auth.Persistence.LOCAL : firebase.auth.Auth.Persistence.SESSION;

    try {
        await firebase.auth().setPersistence(persistence);
        await firebase.auth().signInWithEmailAndPassword(email, password);
        window.location.href = "index.html";
    } catch (error) {
        console.error("Error logging in:", error);
        alert(error);
    }
}

async function signup() {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        await db.collection("Users").doc(firebase.auth().currentUser.uid).set({
            email: email,
        });
        window.location.href = "index.html";
    } catch (error) {
        console.error("Error signing up:", error);
        alert(error)
    }
}

async function logOutUser() {
    try {
        await firebase.auth().signOut();
        console.log('User signed out successfully');
        window.location.href = 'login.html';
    } catch (error) {
        console.error('Error signing out:', error);
    }
}
