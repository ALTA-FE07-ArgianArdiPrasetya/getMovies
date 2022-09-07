import React from "react";
import { Link } from "react-router-dom";
import { IoSunny, IoMoon } from "react-icons/io5";

import { Navbar, Container, Nav } from "react-bootstrap";
import { useMoveContext } from "../context/ContextProvider";

const NavigationBar = () => {
  const { toggle, handleTheme } = useMoveContext();
  return (
    <>
      <Navbar sticky="top" className="bg-black" variant="dark">
        <Container className="d-flex align-content-center p-3">
          <Nav className="d-flex align-content-center ">
            <Link className="text-decoration-none fw-bold me-2 fs-4" to="/">
              Bukan Bioskop
            </Link>{" "}
          </Nav>
          <Nav onClick={() => handleTheme()}>
            {toggle ? (
              <IoMoon color="#fff" size={30} />
            ) : (
              <IoSunny color="#fff" size={30} />
            )}
          </Nav>
          <Nav>
            <Link className="text-decoration-none me-4" to="/">
              Home{" "}
            </Link>{" "}
            <Link className="text-decoration-none" to="/">
              Favorites{" "}
            </Link>{" "}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
