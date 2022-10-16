// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js";
import { getFirestore, addDoc, collection, getDoc, doc, getDocs, serverTimestamp, increment, updateDoc } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeZexbjYgnyFpmHE0VY2zCUHhdRgMAr78",
  authDomain: "flow-61e6d.firebaseapp.com",
  projectId: "flow-61e6d",
  storageBucket: "flow-61e6d.appspot.com",
  messagingSenderId: "490528629436",
  appId: "1:490528629436:web:9e4991c0040b96f8cbe6b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const user = auth.currentUser;
const db = getFirestore(app);


// Check if user is signed in... if so they can write form data
onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        // Write Campaign Form Data to Firestore
        document.getElementById("submitButton").addEventListener('click', async function(e) {
          const answer1 = document.querySelector('input[name="filter1"]:checked').value;
          const answer2 = document.querySelector('input[name="filter2"]:checked').value;
          const answer3 = document.querySelector('input[name="filter3"]:checked').value;
          const answer4 = document.querySelector('input[name="filter4"]:checked').value;
          const answer5 = document.querySelector('input[name="filter5"]:checked').value;
          const answer6 = document.querySelector('input[name="filter6"]:checked').value;
          const answer7 = document.querySelector('input[name="filter7"]:checked').value;
    
          const docRef = await addDoc(collection(db, "entries"), {
              uniqueUser: uid,
              time: serverTimestamp(),
              hungover: answer1,
              hoursOfSleep: answer2,
              happiness: answer3,
              energy: answer4,
              social: answer5,
              productivity: answer6,
              hoursWorked: answer7
          });
            window.location.href = 'https://flow-61e6d.web.app/home.html';
        })

        // ...
    } else {
        // User is signed out
        // ...
        console.log("User is not signed in.")
    }
});




// UPDATE LANDING PAGE ANALYTICS
// await updateDoc(uniqueVisitsRef, {
//     totalUniqueVisits: increment(uniqueVisits),
// });