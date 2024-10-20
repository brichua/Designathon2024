// import { doc, setDoc } from "firebase/firestore"; 

// const myDocumentData = {
//     name: 'John Doe',
//     email: 'johndoe@example.com',
//     age: 30
// };

// // Add a new document in collection "cities"
// //get username and wish count for each user
// await setDoc(doc(db, "Wishes", user_name_wish), {
//   content: "Wish content",
//   received: false, //if the wish is chosen by a user, it is changed to true
//   user: "Person who sent wish"
// });

// import { doc, setDoc } from "firebase/firestore"; 

// // Add a new document in collection "cities"
// await setDoc(doc(db, "cities", "LA"), {
//   name: "Los Angeles",
//   state: "CA",
//   country: "USA"
// });

// Get the element you want to listen for the Enter key on
const inputElement = document.getElementById("userInput");
console.log(inputElement);

// Add the event listener
inputElement.addEventListener("keydown", function(event) {
  // Check if the Enter key was pressed (keyCode 13)
  if (event.key === "Enter") {
    // Do something when the Enter key is pressed
    console.log("Enter key pressed!");

    // Optionally, prevent the default action (e.g., form submission)
    event.preventDefault(); 
  }
});

/*
async function addTask(){
    var taskName = document.getElementById("newTaskName").value;
    var successMessage = document.getElementById("successMessage").innerText = "Created New Task";
    const task = {name: taskName, type: taskType, difficulty: taskDifficulty,
        xpReward: xpReward, currencyReward: taskCurrencyReward, skillxpReward: skillxpReward, skill: taskSkill, completed: false}
    try{
    var tasksTemp = await db.collection("Users").doc(firebase.auth().currentUser.uid).get().then(doc => doc.get('tasks'));
    tasksTemp.push(task);
        await db.collection("Users").doc(firebase.auth().currentUser.uid).update({
        tasks: tasksTemp,
        });
    }catch(error){
        console.error("Error creating task:", error);
    }
    displayUserInformation();
}
*/