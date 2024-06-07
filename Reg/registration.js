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


firebase.initializeApp(firebaseConfig);

// Function to handle user registration
function signup() {
  var username = document.querySelector('input[type="text"]').value;
  var email = document.querySelector('input[type="email"]').value;
  var password = document.querySelector('input[type="password"]').value;


  firebase.auth().createUserWithEmailAndPassword(email, password)

  
    // .then((userCredential) => {
    //   const user = userCredential.user;

    let newKey = firebase.database().ref("email").push().key
  //   firebase.database().ref("email/"+email).set({
  //     password: password,
  //     username: username
  // });
  var user = {
    Email: email,
    Password: password,
    Username: username,
  }

  firebase.database().ref().set(email)


  firebase.database().ref("user/" + username).set({
    Email: email,
    Password: password,
    Username: username,
  });


  firebase.database().ref("user/" + username).set({
    Email: email,
    FperScore: fper, // Add this line to update fper score
    TestScore: testScore, // Add this line to update test score
});








  alert("Data Inserted!")
  document.getElementById("email").value = "";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";

  


    // })
    // .catch((error) => {
    //   const errorMessage = error.message;
    //   document.getElementById('error').innerText = errorMessage;
    // });
}



