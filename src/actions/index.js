import alt from '../alt';
import Firebase from 'firebase';
import _ from 'lodash';

class Actions {
  constructor() {
  }

  initFirebase = () => {
    // Initialize Firebase
    // https://firebase.google.com/support/guides/firebase-web
    var config = {
      apiKey: "AIzaSyD7YCO27zGw16GiLjPKK31M0siaEz0OEj4",
      authDomain: "codehunt-e35f2.firebaseapp.com",
      databaseURL: "https://codehunt-e35f2.firebaseio.com",
      storageBucket: "",
      messagingSenderId: "28704545983"
    };

    Firebase.initializeApp(config);
  };

  initSession() {
    return (dispatch) => {
      this.initFirebase();

      var auth = Firebase.auth();
      auth.onAuthStateChanged(function(authData) {
        var user;
        if (authData) {
          user = {
            id: authData.uid,
            email: authData.email,
            name: authData.displayName,
            avatar: authData.photoURL
          }
        } else {
          user = null;
        }
        dispatch(user);
      });
    }
  }

  login() {
    return (dispatch) => {
      // https://firebase.google.com/docs/auth/web/facebook-login#before_you_begin
      var provider = new Firebase.auth.FacebookAuthProvider();
      Firebase.auth().signInWithPopup(provider).then(function(result) {
        var user = {
          id: result.user.uid,
          email: result.user.email,
          name: result.user.displayName,
          avatar: result.user.photoURL
        }
        // save user info to firebase db
        Firebase.database().ref().child("users").child(result.user.uid).set(user);
        // dispatch user
        dispatch(user);
      }).catch(function(error) {
        return;
      });
    }
  }

  logout() {
    return (dispatch) => {
      Firebase.auth().signOut().then(function(){
        dispatch(null);
      });
    }
  }

  getProducts() {
    return (dispatch) => {
      var firebaseRef = Firebase.database().ref('/products');
      // DataSnapshot
      firebaseRef.on('value', (snapshot) => {
        var products = _.values(snapshot.val());
        dispatch(products);
      });
    }
  }
}

export default alt.createActions(Actions);
