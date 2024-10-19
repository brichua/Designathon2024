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

var taskName;
var taskDifficulty = 0;
var taskType;
var taskSkill;
var taskCurrencyReward;
var xpReward;
var skillxpReward;
var taskCompletion;
var taskCompleteNumber = -1;

var taskDisplayType = "all";

async function login() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const rememberMe = document.getElementById("remember-me").checked;

    const persistence = rememberMe ? firebase.auth.Auth.Persistence.LOCAL : firebase.auth.Auth.Persistence.SESSION;

    try {
        await firebase.auth().setPersistence(persistence);
        await firebase.auth().signInWithEmailAndPassword(email, password);
        window.location.href = "main.html";
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
        window.location.href = "create-user.html";
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

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    displayUserInformation();
  } else {
    window.location.href = "login.html";
  }
});

async function displayUserInformation(){
    var username = await db.collection("Users").doc(firebase.auth().currentUser.uid).get().then(doc => doc.get('username'));
    var icon = await db.collection("Users").doc(firebase.auth().currentUser.uid).get().then(doc => doc.get('icon'));
    var level = await db.collection("Users").doc(firebase.auth().currentUser.uid).get().then(doc => doc.get('level'));
    var levelXP = await db.collection("Users").doc(firebase.auth().currentUser.uid).get().then(doc => doc.get('levelXP'));
    var levelXPMax = await db.collection("Users").doc(firebase.auth().currentUser.uid).get().then(doc => doc.get('levelXPMax'));
    var currency = await db.collection("Users").doc(firebase.auth().currentUser.uid).get().then(doc => doc.get('currency'));

    var levelDisplayText = "Level: " + level + " (" + levelXP + "/" + levelXPMax + ")";

    document.getElementById('username').innerText = username;
    document.getElementById("userImage").src = icon;
    document.getElementById('levelDisplay').innerText = levelDisplayText;
    document.getElementById('currencyDisplay').innerText = currency;

    displayTaskPopup();
    displayTasks();
    displaySkills();
    displayGoodHabits();
    displayBadHabits();
    displayLatestAchievement();
    displayActiveQuests();
    displayLatestGuildPosts();
}

async function displayTasks(){
    var tasks = await db.collection("Users").doc(firebase.auth().currentUser.uid).get().then(doc => doc.get('tasks'));
    for(var i = 0; i < tasks.length; i++){
        var task = "task" + i.toString();
        try{
            document.getElementById(task).remove();
        }catch{
            
        }
    }
}