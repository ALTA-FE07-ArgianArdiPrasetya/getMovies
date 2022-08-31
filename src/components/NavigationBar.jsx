import React, { Component } from "react";
import { Navbar, Container, Nav, NavbarBrand } from "react-bootstrap";

export default class NavigationBar extends Component {
  render() {
    return (
      <>
        <Navbar sticky="top" className="bg-dark" variant="dark">
          <Container>
            <Nav>
              <NavbarBrand className="text-light"> Bukan Bioskop</NavbarBrand>
              <Nav.Link>Home</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>Favorites</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}
