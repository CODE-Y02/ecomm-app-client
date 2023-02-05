import React, { useContext } from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import CartContext from "../../store/cart-context";
// import { cartElements } from "../../DUMMY_DATA";
import CartItem from "./CartItem";

const Cart = (prop) => {
  const { onHide, onPurchase } = prop;

  const cartCtx = useContext(CartContext);

  const cartTotal = cartCtx.items.reduce((total, itm) => {
    return total + itm.quantity * itm.price;
  }, 0);

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

          {cartCtx.items.map((item, idx) => {
            return (
              <CartItem
                key={idx}
                id={item.id}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
                imageUrl={item.imageUrl}
                onRemoveFromCart={cartCtx.removeItem}
              />
            );
          })}

          <div className="d-flex  justify-content-end align-items-center mt-3 fw-bold ">
            <h4 className=" mx-3 ">Total</h4>
            <span className=" fw-semibold text-danger">{cartTotal} $</span>
          </div>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onPurchase}>Purchase</Button>
        <Button onClick={onHide} variant="secondary">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
