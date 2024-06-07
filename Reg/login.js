var firebaseConfig = {
    apiKey : "AIzaSyDbCZxOmijmeGzAzW1dgO_JDMrPNByF_V0",
    authDomain: "waningjackloginpage.firebaseapp.com",
    projectId: "waningjackloginpage",
    storageBucket: "waningjackloginpage.appspot.com",
    messagingSenderId: "81305134840",
    appId: "1:81305134840:web:aaa33939adf94c0cda7d0d",
    measurementId: "G-JVQVZLX9S9"
  };

firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()

document.getElementById("loginform").addEventListener("submit",(event) =>{
    event.preventDefault()
})


firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        location.replace("index.html")
    }
})

function login(){
    const email=document.getElementById("email").value
    const password=document.getElementById("password").value

    firebase.auth().signInWithEmailAndPassword(email,password)
    .catch((error) =>{
        document.getElementById("error").innerHTML=error.messsage
    })
}


function forgotPass(){
    const email=document.getElementById("email").value
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
        alert("Reset link sent to your email-id")
      })
      .catch((error) => {
        document.getElementById("error").innerHTML=error.messsage
      });
}