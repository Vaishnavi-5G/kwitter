//YOUR FIREBASE LINKS
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
    room_name=localStorage.getItem("room_name");

    function send () {
    msg=document.getElementById("msg").value ;
    firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0      
    }) ;
    document.getElementById("msg").value="" ;
      
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
