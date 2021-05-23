import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductList from "./displayProducts.js";
import Cart from "./Cart.js";
import Login from "./signIn";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";

export default function Nav(props) {
  return (
    <Router>
      <div className="App-header">
        <section className="left col-10">
          <Link to="/">
            <h1 className="text-white">
              Shop 2 <span>R</span>eact
            </h1>
          </Link>
        </section>
        <section className="right col-2">
          <Link to="/cart">
            <h5 className="text-white">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span> {props.totalQty} </span> items
            </h5>
          </Link>
          <Link to="/signin"></Link>
        </section>
      </div>
      <Switch>
        <Route exact path="/">
          <ProductList
            products={props.products}
            increaseQty={props.increaseQty}
            decreaseQty={props.decreaseQty}
          />
        </Route>
        <Route exact path="/cart">
          <Cart products={props.products} />
        </Route>
        <Route exact path="/signin">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}
