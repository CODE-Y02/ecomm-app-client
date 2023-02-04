import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const Product = ({ imageUrl, title, price, idx }) => {
  return (
    <Col
      md={{ span: 4, offset: (idx + 1) % 2 === 0 ? 4 : 0 }}
      key={idx}
      className="p-2  g-5"
    >
      <Card>
        <Card.Img variant="top" src={imageUrl} />

        <Card.Body>
          <Card.Title className="text-center">{title}</Card.Title>

          <div className="details  p-2 d-flex justify-content-between align-items-center flex-wrap">
            <span className="price text-danger fw-bold "> $ {price} </span>
            <Button>Add to Cart</Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
