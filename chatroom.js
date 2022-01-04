function logout(){
      
}
var firebaseConfig = {
apiKey: "AIzaSyCkKG3A8jDT15N541e4wqFrhn2T7nLaxWU",
authDomain: "breddit-66179.firebaseapp.com",
databaseURL: "https://breddit-66179-default-rtdb.firebaseio.com",
projectId: "breddit-66179",
storageBucket: "breddit-66179.appspot.com",
messagingSenderId: "402440769824",
appId: "1:402440769824:web:7dd675afda483636b74745"
};
firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("username")
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
Room_names = childKey;
      //Start code
      row="<div class='roomnames' id="+ Room_names +"onclick='goTo(this.id)'>#"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function create(){
      room_name=document.getElementById("roomname").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding username"
      })
      localStorage.setItem("roomname",room_name)
      window.location="kwitter_page.html"
}
function goTo(name){
      localStorage.setItem("roomname",name)
      window.location="kwitter_page.html"    
}