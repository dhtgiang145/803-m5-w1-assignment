import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ListGroup, ListGroupItem } from "reactstrap";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          image: "./products/cologne.jpg",
          desc: "Unisex Cologne",
          value: 0,
        },
        {
          id: 2,
          image: "./products/iwatch.jpg",
          desc: "Apple iWatch",
          value: 0,
        },
        {
          id: 3,
          image: "./products/mug.jpg",
          desc: "Unique Mug",
          value: 0,
        },
        {
          id: 4,
          image: "./products/wallet.jpg",
          desc: "Mens Wallet",
          value: 0,
        },
      ],
    };
  }
  render() {
    return (
      <div className="App container">
        <div className="App-header">
          <section className="left col-10">
            <h1>Shop to React</h1>
          </section>
          <section className="right col-2">
            <h5>
              {" "}
              <FontAwesomeIcon icon={faShoppingCart} /> 0 items{" "}
            </h5>
          </section>
        </div>
        <div>
          <ProductList products={this.state.products} />
        </div>
      </div>
    );
  }
}

function ProductList(props) {
  const products = props.products;
  const listItems = products.map((product) => {
    return (
      <ListGroupItem key={product.id} className="Products">
        <section className="listItem col-5">
          <h4>{product.desc}</h4>
          <img src={product.image}></img>
        </section>
        <section className="listQty col-7">
          <div className="box">
            <span>{product.value} </span>
          </div>
          <h6>quantity</h6>
        </section>
      </ListGroupItem>
    );
  });
  return <ListGroup>{listItems}</ListGroup>;
}

export default App;
