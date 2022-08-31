import React, { Component } from "react";
import { Card } from "react-bootstrap";

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
            className="img-movie"
          />
          <h6 className="text-center text-white"> {this.props.title} </h6>
        </Card>
      </div>
    );
  }
}
