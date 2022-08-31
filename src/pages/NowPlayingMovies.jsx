import React, { Component } from "react";
import CardMovies from "../components/CardMovies";
import NavigationBar from "../components/NavigationBar";
import axios from "axios";

// import "./NowPlaying.css";
const baseUrl = "https://api.themoviedb.org/";
const page = 1;
// const urlHeadline =
//   baseUrl +
//   "top-headlines?" +
//   "country=id&" +
//   `apiKey=${process.env.REACT_APP_API_KEY}`;

let urlMovies = `${baseUrl}3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`;

// let urlMovies = `https://api.themoviedb.org/3/movie/now_playing?api_key=f8bc7465b788992612b64c92537d503b&language=en-US&page=1`;
export default class NowPlayingMovies extends Component {
  state = {
    ListMovies: [],
  };

  componentDidMount() {
    const self = this;
    axios.get(urlMovies).then((response) => {
      // console.log(response.data.results);
      self.setState({
        ListMovies: response.data.results,
      });
    });
  }

  render() {
    // const { ListMovies } = this.state;
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
