
const firebaseConfig = {
      apiKey: "AIzaSyBF37v1SBT2cEYsxs8uV5w48XqA9TRtTJw",
      authDomain: "kwitter-ace8e.firebaseapp.com",
      databaseURL: "https://kwitter-ace8e-default-rtdb.firebaseio.com",
      projectId: "kwitter-ace8e",
      storageBucket: "kwitter-ace8e.appspot.com",
      messagingSenderId: "225418048754",
      appId: "1:225418048754:web:0bcd6c827bee62c6638c6b"
    };
    
    
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout()
{
      window.location = "index.html";
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
}