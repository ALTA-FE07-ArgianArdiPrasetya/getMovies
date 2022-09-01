import React, { Component } from "react";
// import { Card } from "react-bootstrap";
import NavigationBar from "../components/NavigationBar";
import { withRouter } from "../withRouter";

class DetailMovie extends Component {
  render() {
    return (
      <>
        <NavigationBar />
        <div className="bg-dark my-3 mx-auto w-75 border d-flex ">
          <figure className="w-25 m-3 ">
            <img
              src={this.props.location.state.src}
              alt="this.props.location.state.title"
              className="img-movie  p-1 w-100 border border-4 border-info"
            />
          </figure>
          <div className="w-75">
            <h3 className="title text-white  ">
              {this.props.location.state.title}
            </h3>
            <h5 className="text-white">
              Popularity: {this.props.location.state.popularity}
            </h5>
            <h5 className="text-white">
              Vote: {this.props.location.state.vote_average}
            </h5>
            <h5 className="text-white">
              Release Date: {this.props.location.state.release_date}
            </h5>

            <p className="text-white mt-5">
              {this.props.location.state.overview}
            </p>
            <h6>fdfdf</h6>
          </div>
        </div>
      </>
    );
  }
}
export default withRouter(DetailMovie);
