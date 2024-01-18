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
const auth = firebase.auth();

function store(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const username = document.getElementById("username").value;
    // const fper = document.getElementById("fper").value;

    const database = firebase.database();

    database.ref("user/" + username).update({
        Email: email,
        Password: password,
        Username: username, 
        Score: fper
      })
      .then(() => {
        alert("Data Inserted!");
      })
      .catch((error) => {
        console.error("Error inserting data:", error);
        alert("Error inserting data. Check console for details.");
      });
  



}