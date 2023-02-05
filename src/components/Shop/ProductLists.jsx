import { productsArr } from "../../DUMMY_DATA";

import Row from "react-bootstrap/Row";
import Product from "./Product";

const ProductLists = () => {
  return (
    <Row className="px-5 ">
      {productsArr.map((prod, idx) => (
        <Product
          key={prod.title + idx}
          prodId={prod.title + idx}
          idx={idx}
          title={prod.title}
          imageUrl={prod.imageUrl}
          price={prod.price}
        />
      ))}
    </Row>
  );
};

export default ProductLists;
