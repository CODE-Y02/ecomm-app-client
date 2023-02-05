import React from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import { cartElements } from "../../DUMMY_DATA";
import CartItem from "./CartItem";

const Cart = (prop) => {
  const { onHide } = prop;
  return (
    <Modal {...prop} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title
          // id="contained-modal-title-vcenter"
          className="w-100 text-center"
        >
          Cart
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row className=" fw-bold  text-capitalize text-center">
            <Col
              xs={4}
              sm={{
                span: 6,
              }}
            >
              Item
            </Col>
            <Col>price</Col>
            <Col
              xs={{
                span: 4,
              }}
            >
              quantity
            </Col>
          </Row>

          {/* below this we will have cart items  */}

          {cartElements.map((item, idx) => {
            return (
              <CartItem
                title={item.title}
                price={item.price}
                quantity={item.quantity}
                imageUrl={item.imageUrl}
              />
            );
          })}
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
