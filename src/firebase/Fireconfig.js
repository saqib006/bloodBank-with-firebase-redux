import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDPatTL6ddAe1cz7NJhm9TnqQUTt5CFuu4",
    authDomain: "blood-bank-react.firebaseapp.com",
    databaseURL: "https://blood-bank-react.firebaseio.com",
    projectId: "blood-bank-react",
    storageBucket: "blood-bank-react.appspot.com",
    messagingSenderId: "356745573022"
  };

  var fireObj = firebase.initializeApp(config);

  export default fireObj;