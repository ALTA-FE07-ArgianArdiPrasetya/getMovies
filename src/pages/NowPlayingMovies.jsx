import React, { Component } from "react";
import CardMovies from "../components/CardMovies";

import "./NowPlaying.css";

export default class NowPlayingMovies extends Component {
  render() {
    const listMovies = [
      {
        image:
          "https://images.unsplash.com/photo-1611567798785-dc07e90a6b7a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8c3BpZGVybWFufHx8fHx8MTY2MTg1NjI1Nw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200",
        title: "Spiderman In My Home",
      },
      {
        image:
          "https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29kaW5nfHx8fHx8MTY2MTg1NjY0Mg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200",
        title: "Trust Me We Are Not Hacker",
      },
      {
        image:
          "https://images.unsplash.com/photo-1644760504323-c6b0c09eff8f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8c3BpZGVybWFufHx8fHx8MTY2MTg1NjgzNw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200",
        title: "Spiderman OTW Home",
      },
      {
        image:
          "https://images.unsplash.com/photo-1611567798785-dc07e90a6b7a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8c3BpZGVybWFufHx8fHx8MTY2MTg1NjI1Nw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=200",
        title: "Spiderman In My Home Season 2",
      },
    ];
    return (
      <div className="container">
        <h1>Now Playing</h1>
        <div className="card">
          {listMovies.map((movie) => {
            return <CardMovies src={movie.image} title={movie.title} />;
          })}
        </div>
      </div>
    );
  }
}
