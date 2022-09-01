import React, { Component } from "react";
import { Navbar, Container, Nav, NavbarBrand } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class NavigationBar extends Component {
  render() {
    return (
      <>
        <Navbar sticky="top" className="bg-dark" variant="dark">
          <Container className="d-flex align-content-center">
            <Nav className="d-flex align-content-center ">
              <NavbarBrand className="text-light">
                <Link className="text-decoration-none" to="/">
                  Bukan Bioskop
                </Link>{" "}
              </NavbarBrand>
              <Nav.Link>
                <Link className="text-decoration-none" to="/">
                  Home{" "}
                </Link>{" "}
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                {" "}
                <Link className="text-decoration-none" to="/">
                  Favorites{" "}
                </Link>{" "}
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}
