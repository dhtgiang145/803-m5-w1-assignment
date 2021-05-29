import React, { useState } from "react";
import { ListGroup, ListGroupItem, ModalBody } from "reactstrap";
import { Modal } from "react-bootstrap";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";

export default function ProductList(props) {
  const { products = [] } = props;
  const [show, setShow] = useState(false);
  const [showImg, setShowImg] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = (product) => {
    setShow(true);
    setShowImg(product);
  };

  const listItems = products.map((product) => {
    return (
      <ListGroupItem
        key={product.id}
        className="d-flex flex-row align-items-center"
      >
        <section className="listItem col-5">
          <h5>
            {product.desc}{" "}
            <strong className="text-danger">${product.price}</strong>
          </h5>
          <img
            src={product.image}
            alt={product.desc}
            onClick={() => handleShow(product)}
          ></img>
        </section>
        <Modal id="modal" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{showImg.desc}</Modal.Title>
          </Modal.Header>
          <ModalBody>
            <img
              src={showImg.image}
              width="350"
              alt={showImg.desc}
              className="mx-5"
            ></img>
            <p>
              <span className="text-dark">Ratings:</span> {showImg.ratings}/5
            </p>
          </ModalBody>
        </Modal>
        <section className="listQty col-7">
          <div className="m-2">
            <button onClick={() => props.decreaseQty(product)}>
              <FontAwesomeIcon icon={faMinusCircle} />
            </button>
            <button onClick={() => props.increaseQty(product)}>
              <FontAwesomeIcon icon={faPlusCircle} />
            </button>
          </div>
          <div className="box m-2">
            <span>{product.value} </span>
          </div>
          <h6 className="mt-2">quantity</h6>
        </section>
      </ListGroupItem>
    );
  });
  return (
    <div>
      <label>Sort Price By:</label>
      <select onChange={(e) => props.onSort(listItems, e.target.value)}>
        <option value="def">Normal</option>
        <option value="desc">Lowest</option>
        <option value="asc">Highest</option>
      </select>
      <ListGroup>{listItems}</ListGroup>
    </div>
  );
}
