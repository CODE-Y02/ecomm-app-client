import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
const CartItem = ({ title, price, quantity, imageUrl }) => {
  return (
    <Row className=" g-2 mt-1 pb-2 border-bottom">
      <Col
        className=" d-flex justify-content-center "
        xs={4}
        sm={{
          span: 6,
        }}
      >
        <Card
          border="primary"
          style={{ height: "auto", width: "auto" }}
          className="mx-3 my-1"
        >
          <img src={imageUrl} alt={title} />
          <p className="text-center fw-semibold ">{title}</p>
        </Card>
      </Col>

      <Col
        // className="bg-primary"
        className=" d-flex justify-content-center fw-bold text-danger align-items-center "
      >
        {price} $
      </Col>
      <Col
        xs={{
          span: 4,
        }}
        className=" d-flex justify-content-around flex-wrap fw-bold align-items-center "
      >
        <span className=" p-2 bg-light border border-primary  rounded-2 ">
          {quantity}{" "}
        </span>
        <Button variant="outline-danger"> remove</Button>
      </Col>
    </Row>
  );
};

export default CartItem;
