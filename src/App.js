import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductList from "./displayProducts.js";
import Nav from "./navbar.js";
import Cart from "./Cart.js"
import "./App.css";
import { products } from "./products.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: products,
      modal: false,
      selected: null,
    };
  }
  render() {
    return (
      <div className="App container">
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/">
              <ProductList products={this.state.products} />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
