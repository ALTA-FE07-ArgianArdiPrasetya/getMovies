import React from "react";
import { Card } from "react-bootstrap";
import { useMoveContext } from "../context/ContextProvider";

import "./CardMovies.css";

const CardFavoriteMovie = ({ src, title }) => {
  const { toggle } = useMoveContext();
  return (
    <>
      <Card
        className="container-card my-4 container-card-fav"
        style={{ background: toggle ? "#EDEADE" : " 	#36454F" }}
      >
        <img src={src} alt={title} className="img-movie mx-auto pt-4" />
        <h6
          className="title text-center"
          style={{ color: toggle ? "#36454F" : "#F9F6EE" }}
        >
          {" "}
          {title}{" "}
        </h6>
      </Card>
    </>
  );
};

export default CardFavoriteMovie;
