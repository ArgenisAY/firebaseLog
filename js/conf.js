import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUoSHXQ6J1Iuw8BM8o6UqsZvTHjbAtaGY",
  authDomain: "usuario-8c011.firebaseapp.com",
  projectId: "usuario-8c011",
  storageBucket: "usuario-8c011.appspot.com",
  messagingSenderId: "807002968838",
  appId: "1:807002968838:web:36e1b085bf237fab964487",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// button submit

const $submit = document.getElementById("submit");
const $login = document.getElementById("submit_log");

if ($submit) {
  $submit.addEventListener("click", function () {
    const email = document.getElementById("mail").value;
    const password = document.getElementById("pass").value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("Tu cuenta se ha creado satisfactoriamente");
        window.open("https://argenisay.github.io/trabajofFinal3/#home");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("error");
        // ..
      });
  });
}

// Login code

if ($login) {
  $login.addEventListener("click", () => {
    const email_log = document.getElementById("mail_log").value;
    const password_log = document.getElementById("pass_log").value;

    signInWithEmailAndPassword(auth, email_log, password_log)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        alert("Ingresaste correctamente");
        window.open("https://argenisay.github.io/trabajofFinal3/#home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("error no haz podido ingresar");
      });
  });
}
