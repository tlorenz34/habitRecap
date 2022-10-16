// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// LOGIN
window.onload = function(){
    document.getElementById("loginButton").addEventListener('click', function(e) {
        const email1 = document.getElementById("loginemail").value
        const password1 = document.getElementById("loginpassword").value
    
    
        e.preventDefault()
    
        signInWithEmailAndPassword(auth, email1, password1)
            .then((userCredential) => {
                const user = userCredential.user;
                window.location.href = 'https://flow-61e6d.web.app/home.html';
    
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode + errorMessage);
            });
    
    })

}
