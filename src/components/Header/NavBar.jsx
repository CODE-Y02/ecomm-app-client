import React, { useContext } from "react";
import { Badge, Button, Container, Nav, Navbar } from "react-bootstrap";

import { Cart } from "react-bootstrap-icons";
import { NavLink, useLocation } from "react-router-dom";
import CartContext from "../../store/cart-context";

import styles from "./NavBar.module.css";
const NavBar = ({ onCartShow }) => {
  const { items } = useContext(CartContext);

  const currentPath = useLocation().pathname;

  const totalCartItems = items.reduce((totalTillNow, currItm) => {
    return totalTillNow + currItm.quantity;
  }, 0);

  return (
    <Navbar bg="dark" sticky="top" expand>
      <Container className=" d-flex  flex-wrap  flex-column flex-sm-row ">
        <Navbar.Brand style={{ color: "white", border: "none" }}>
          CODERS
        </Navbar.Brand>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Home
          </NavLink>

          <NavLink
            to="/shop"
            end
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Shop
          </NavLink>

          <NavLink
            to="/about"
            end
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            About
          </NavLink>
        </Nav>
        (
        <Button
          variant="outline-light"
          color="info"
          onClick={onCartShow}
          style={{ visibility: currentPath === "/shop" ? true : "hidden" }}
        >
          <Badge bg="danger" text="white" pill>
            {totalCartItems}
          </Badge>
          <Cart />
        </Button>
        )
      </Container>
    </Navbar>
  );
};

export default NavBar;
