// import React from "react";

import { productsArr } from "../../DUMMY_DATA";

// const ProductLists = ({ products }) => {
//   return
// };

// export default ProductLists;

import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ProductLists = () => {
  return (
    <Row gap={2} className="px-5">
      {productsArr.map((prod, idx) => (
        <Col
          md={{ span: 4, offset: (idx + 1) % 2 === 0 ? 4 : 0 }}
          key={idx}
          className="p-2  g-5"
        >
          <Card>
            <Card.Img variant="top" src={prod.imageUrl} />

            <Card.Body>
              <Card.Title className="text-center">{prod.title}</Card.Title>

              <div className="details  p-2 d-flex justify-content-between align-items-center">
                <span className="price text-danger fw-bold ">
                  {" "}
                  $ {prod.price}{" "}
                </span>
                <Button>Add to Cart</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductLists;
