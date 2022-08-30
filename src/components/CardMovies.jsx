import React, { Component } from "react";

import "./CardMovies.css";

export default class CardMovies extends Component {
  render() {
    return (
      <div className="container-card">
        <div className="picture">
          <img src={this.props.src} alt={this.props.movie} />
        </div>
        <h3 className="title"> {this.props.title} </h3>
      </div>
    );
  }
}
