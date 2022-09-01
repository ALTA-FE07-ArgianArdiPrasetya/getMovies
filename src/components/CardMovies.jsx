import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

import "./CardMovies.css";

export default class CardMovies extends Component {
  render() {
    return (
      <div>
        {/* <div className="">
          <img src={this.props.src} alt={this.props.movie} />
        </div>
        <h3 className="text-white"> {this.props.title} </h3> */}
        {/* <Row> */}
        <Card className="bg-dark container-card my-3">
          <img
            src={this.props.src}
            alt="this.props.title"
            className="img-movie mx-auto pt-4"
          />
          <h6 className="title  text-center text-white ">
            {" "}
            {this.props.title}{" "}
          </h6>
          <Button
            variant="primary"
            onClick={this.props.onClick}
            className="my-2"
          >
            {" "}
            More Details
          </Button>
          <Button variant="primary" onClick={this.props.onClick} className="">
            {" "}
            Add To Favorite
          </Button>
        </Card>
      </div>
    );
  }
}
