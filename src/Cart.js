import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function Cart(props) {
  const { products = [] } = props;
  const cartItems = products.filter((product) => product.value > 0);
  const cartContent = !!cartItems.length ? (
    <div>
      <button className="btn bg-success my-3">
        <a href="/signin" className="text-white">
          Check Out
        </a>
      </button>
    </div>
  ) : (
    <div className="d-flex flex-column align-items-start">
      <h5 className="mx-5 py-1">There are 0 items in your cart</h5>
      <button className="btn bg-success mx-5">
        <a href="/" className="text-white">
          Continue Shop
        </a>
      </button>
    </div>
  );
  return (
    <div className="block">
      <h4 className="mt-5">Your Cart Items</h4>
      {products.map((product) => {
        if (product.value > 0) {
          return (
            <div className="border d-flex align-items-center">
              <img src={product.image} alt={product.desc} />
              <p className="qty d-inline mx-5 justify-content-center">
                Quantity: {product.value}
              </p>
              <p className="px-4">{product.desc}</p>
            </div>
          );
        } else {
          return null;
        }
      })}
      {cartContent}
    </div>
  );
}
