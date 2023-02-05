import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import CartContext from "../../store/cart-context";

const Product = ({ imageUrl, title, price, idx, prodId }) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (e) => {
    e.preventDefault();
    const item = {
      id: prodId,
      title,
      price,
      imageUrl,
      quantity: 1,
    };

    cartCtx.addItem(item);
  };

  return (
    <Col
      md={{ span: 4, offset: (idx + 1) % 2 === 0 ? 4 : 0 }}
      className="p-2  g-5"
    >
      <Card>
        <Card.Img variant="top" src={imageUrl} />

        <Card.Body>
          <Card.Title className="text-center">{title}</Card.Title>

          <div className="details  p-2 d-flex justify-content-between align-items-center flex-wrap">
            <span className="price text-danger fw-bold "> $ {price} </span>
            <Button onClick={addToCartHandler}>Add to Cart</Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
