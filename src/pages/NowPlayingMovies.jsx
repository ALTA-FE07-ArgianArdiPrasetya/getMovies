import React, { Component } from "react";
import CardMovies from "../components/CardMovies";
import NavigationBar from "../components/NavigationBar";
import axios from "axios";
import { withRouter } from "../withRouter";

const baseUrl = "https://api.themoviedb.org/";
const page = 1;

let urlMovies = `${baseUrl}3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`;

class NowPlayingMovies extends Component {
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

  handleDetailPage(movie) {
    this.props.navigate("/detail-movie", {
      state: {
        src: "https://image.tmdb.org/t/p/original/" + movie.poster_path,
        title: movie.title,
        overview: movie.overview,
        vote_average: movie.vote_average,
        popularity: movie.popularity,
        release_date: movie.release_date,
      },
    });
  }

  // <h5 className="text-white">
  //             Popularity: {this.props.location.state.popularity}
  //           </h5>
  //           <h5 className="text-white">
  //             Vote: {this.props.location.state.vote_average}
  //           </h5>

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
                onClick={() => this.handleDetailPage(movie)}
              />
            );
          })}
        </div>
      </>
    );
  }
}
export default withRouter(NowPlayingMovies);
