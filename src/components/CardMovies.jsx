import React from "react";
import { Card, Button } from "react-bootstrap";
import { useMoveContext } from "../context/ContextProvider";

import "./CardMovies.css";

const CardMovies = ({ src, title, onClick }) => {
  const { toggle } = useMoveContext();
  return (
    <>
      <Card
        className="container-card my-4"
        style={{ background: toggle ? "#EDEADE" : " 	#36454F", height: 550 }}
      >
        <img src={src} alt={title} className="img-movie mx-auto pt-4" />
        <h6
          className="title text-center"
          style={{ color: toggle ? "#36454F" : "#F9F6EE" }}
        >
          {" "}
          {title}{" "}
        </h6>
        <Button
          variant="primary"
          onClick={onClick}
          className="button-card my-2"
        >
          More Details
        </Button>
        <Button variant="primary" className="button-card">
          Add To Favorite
        </Button>
      </Card>
    </>
  );
};

export default CardMovies;
