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
room_name = localStorage.getItem("roomname")

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                childData = childSnapshot.val();
                if (childKey != "purpose") {
                      firebase_message_id = childKey;
                      message_data = childData;
                      //Start code

                      //End code
                }
          });
    });
}
getData();

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name: user_name,
          messaage: msg,
          like: 0
    });
    document.getElementById("msg").value = "";
}