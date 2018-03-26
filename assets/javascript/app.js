var moment = require('moment');
moment().format();

var config = {
    apiKey: "AIzaSyBOoGzSsTAw5WmwuNSVBpzhAEl8TRaopY4",
    authDomain: "firetrain-b1351.firebaseapp.com",
    databaseURL: "https://firetrain-b1351.firebaseio.com",
    projectId: "firetrain-b1351",
    storageBucket: "",
    messagingSenderId: "956980178330"
  };

  firebase.initializeApp(config);

  let database = firebase.database()

