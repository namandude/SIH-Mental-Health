
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

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        document.getElementById("user").innerHTML = "Email : "+user.email

    }
})

