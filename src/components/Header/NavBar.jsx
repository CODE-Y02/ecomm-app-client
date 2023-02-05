import React, { useContext } from "react";
import {
  Badge,
  Button,
  Container,
  Nav,
  Navbar,
  NavItem,
} from "react-bootstrap";

import { Cart } from "react-bootstrap-icons";
import CartContext from "../../store/cart-context";

const NavBar = ({ onCartShow }) => {
  const { items } = useContext(CartContext);

  const totalCartItems = items.reduce((totalTillNow, currItm) => {
    return totalTillNow + currItm.quantity;
  }, 0);

  return (
    <Navbar bg="dark" sticky="top" expand>
      <Container className=" d-flex  flex-wrap  flex-column flex-sm-row ">
        <Navbar.Brand style={{ color: "white" }} href="#home">
          Shoppy
        </Navbar.Brand>

        <Nav className="justify-content-end flex-grow-1 pe-3">
          <NavItem className="pad1 m-1">
            <Button variant="outline-light">Home</Button>
          </NavItem>
          <NavItem className="  pad1 m-1">
            <Button variant="outline-light">Shop</Button>
          </NavItem>
          <NavItem className="  pad1 m-1">
            <Button variant="outline-light">About</Button>
          </NavItem>
          <NavItem className="  pad1 m-1"></NavItem>
        </Nav>
        <Button variant="outline-light" color="info" onClick={onCartShow}>
          <Badge bg="danger" text="white" pill>
            {totalCartItems}
          </Badge>
          <Cart />
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavBar;
