var firebaseConfig = {
      apiKey: "AIzaSyCqRjLqCAxoFtwIPpo6O5WVgmU2eRELHYI",
      authDomain: "kwitter-61880.firebaseapp.com",
      databaseURL: "https://kwitter-61880-default-rtdb.firebaseio.com",
      projectId: "kwitter-61880",
      storageBucket: "kwitter-61880.appspot.com",
      messagingSenderId: "815491896225",
      appId: "1:815491896225:web:68ee0d308184167a61b1e0"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name+"!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name-"+ Room_names);
      row="<div class='room_name' id="+ Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();
function addRoom (){
room_name=document.getElementById("room_name") .value ;
firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"      
});
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";
}
function redirectToRoomName(name) 
{
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}
function logout() {
localStorage.removeItem("user_name") ;
localStorage.removeItem ("room_name");
window.location="index.html";  
}