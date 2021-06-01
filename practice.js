var firebaseConfig = {
    apiKey: "AIzaSyCGkfd340Yu78RJXT7U_bjh8b5rkxRwA_c",
    authDomain: "kwitter-app-8da16.firebaseapp.com",
    databaseURL: "https://kwitter-app-8da16-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-8da16",
    storageBucket: "kwitter-app-8da16.appspot.com",
    messagingSenderId: "914581262097",
    appId: "1:914581262097:web:2123df5997e44a01f086b0",
    measurementId: "G-MXTV6J2WC5"
  };
  function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}
