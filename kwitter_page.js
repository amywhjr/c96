//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyARB2c2QCjg2JWvI_H43FZvMzgs5Sn0YnA",
      authDomain: "classtest-6cf98.firebaseapp.com",
      databaseURL: "https://classtest-6cf98-default-rtdb.firebaseio.com",
      projectId: "classtest-6cf98",
      storageBucket: "classtest-6cf98.appspot.com",
      messagingSenderId: "648116493258",
      appId: "1:648116493258:web:57f431086ae79dc6734d33"
    };
    firebase.initializeApp(firebaseConfig);

    function redirectToRoomName(name) { console.log(name); localStorage.setItem("room_name", name); window.location = "kwitter_page.html"; }
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
