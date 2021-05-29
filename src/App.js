import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./navbar.js";
import "./App.css";
import { products } from "./products.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortType: "",
      listNum: "",
      data: products,
      modal: false,
      selected: null,
    };
  }
  increaseQty = (addvalue) => {
    if (addvalue.value < 10) {
      const updatedValue = addvalue.value++;
      this.setState({ updatedValue });
    }
  };
  decreaseQty = (decvalue) => {
    if (decvalue.value > 0) {
      const updatedValue = decvalue.value--;
      this.setState({ updatedValue });
    }
  };
  onSort = (listNum, sortType) => {
    switch (sortType) {
      case "def":
        listNum.sort((a, b) => {
          return a.id - b.id;
        });
        break;
      case "desc":
        listNum.sort((a, b) => {
          return b.price - a.price;
        });
        break;
      case "asc":
        listNum.sort((a, b) => {
          return a.price - b.price;
        });
        break;
      default:
        break;
    }
    this.setState({ sortType });
  };

  render() {
    return (
      <div className="App container">
        <Nav
          totalQty={this.state.data
            .map((product) => product.value)
            .reduce((acc, curr) => acc + curr, 0)}
          products={this.state.data}
          increaseQty={this.increaseQty}
          decreaseQty={this.decreaseQty}
          sortType={this.state.sortType}
          listNum={this.state.listNum}
          onSort={this.onSort}
        />
      </div>
    );
  }
}
export default App;
