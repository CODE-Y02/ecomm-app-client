import React from "react";
import {
  Badge,
  Button,
  Container,
  Image,
  Nav,
  Navbar,
  NavItem,
} from "react-bootstrap";

import cartIcon from "../../assets/images/cart-icon.png";

const NavBar = ({ onCartShow }) => {
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
            9
          </Badge>
          <Image src={cartIcon} fluid bsPrefix height="20px" />
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavBar;
