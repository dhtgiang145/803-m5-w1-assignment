import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";

export default function Nav() {
  return (
    <div className="App-header">
      <section className="left col-10">
        <Link to="/">
          <h1>
            Shop 2 <span>R</span>eact
          </h1>
        </Link>
      </section>
      <section className="right col-2">
        <Link to="/cart">
          <h5>
            <FontAwesomeIcon icon={faShoppingCart} /> 0 items
          </h5>
        </Link>
      </section>
    </div>
  );
}
