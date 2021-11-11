
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyARB2c2QCjg2JWvI_H43FZvMzgs5Sn0YnA",
      authDomain: "classtest-6cf98.firebaseapp.com",
      databaseURL: "https://classtest-6cf98-default-rtdb.firebaseio.com",
      projectId: "classtest-6cf98",
      storageBucket: "classtest-6cf98.appspot.com",
      messagingSenderId: "648116493258",
      appId: "1:648116493258:web:57f431086ae79dc6734d33"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welome"+user_name+"!";

function addRoom()
 {
    room_name = document.getElementById("room_name").value;
 firebase.database().ref("/").child(room_name).update(
   { purpose : "adding room name" });
  localStorage.setItem("room_name", room_name);
   window.location = "kwitter_page.html";
 }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start 
      console.log("Room Name - " + Room_names); 
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
      //End code
     });});}
getData();

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="kwitter.html";
  
}
function send()
{
  msg=document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
  });
  document.getElementById("msg").value="";
  
}