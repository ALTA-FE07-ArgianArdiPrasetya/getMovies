import React, { Component } from "react";
import CardMovies from "../components/CardMovies";
import NavigationBar from "../components/NavigationBar";
import axios from "axios";

const baseUrl = "https://api.themoviedb.org/";
const page = 1;

let urlMovies = `${baseUrl}3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`;

export default class NowPlayingMovies extends Component {
  state = {
    ListMovies: [],
  };

  componentDidMount() {
    const self = this;
    axios.get(urlMovies).then((response) => {
      self.setState({
        ListMovies: response.data.results,
      });
    });
  }

  render() {
    return (
      <>
        <NavigationBar />
        <div className="d-flex flex-wrap justify-content-around mt-3">
          {this.state.ListMovies.map((movie) => {
            return (
              <CardMovies
                src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
                title={movie.title}
                key={movie.id}
              />
            );
          })}
        </div>
      </>
    );
  }
}
