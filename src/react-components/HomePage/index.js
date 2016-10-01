import React from 'react';
import ProductList from '../Product/ProductList';
import Firebase from 'firebase';
import _ from 'lodash';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      ProductList: []
    };

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
    var firebaseRef = Firebase.database().ref('/products');
    // DataSnapshot
    firebaseRef.on('value', (snapshot) => {
      var products = _.values(snapshot.val());
      this.setState({
        ProductList: products
      });
    });
  }

  render() {
    return (
      <section>
        <header>
          <img src="./img/banner.jpeg" width="100%"/>
        </header>

        <section>
          <section className="container">
            {
              this.state.ProductList
              ?
              <ProductList productList={this.state.ProductList} />
              :
              null
            }
          </section>
        </section>
      </section>
    );
  }
}

export default HomePage;
