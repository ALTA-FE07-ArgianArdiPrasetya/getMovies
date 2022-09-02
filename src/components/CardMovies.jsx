import React from "react";
import { Card, Button } from "react-bootstrap";

import "./CardMovies.css";

const CardMovies = ({ src, title, onClick }) => {
  return (
    <>
      <Card className="bg-dark container-card my-3">
        <img src={src} alt={title} className="img-movie mx-auto pt-4" />
        <h6 className="title  text-center text-white "> {title} </h6>
        <Button variant="primary" onClick={onClick} className="my-2">
          {" "}
          More Details
        </Button>
        <Button variant="primary" className="">
          {" "}
          Add To Favorite
        </Button>
      </Card>
    </>
  );
};

export default CardMovies;
