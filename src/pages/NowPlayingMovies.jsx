import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { reduxAction } from "../redux/actions/action";

import NavigationBar from "../components/NavigationBar";
import CardMovies from "../components/CardMovies";
import { useMoveContext } from "../context/ContextProvider";

const baseUrl = "https://api.themoviedb.org/";
const page = 1;

const NowPlayingMovies = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const { toggle } = useMoveContext();
  const dispatch = useDispatch();

  const getMovies = async () => {
    await axios
      .get(
        `${baseUrl}3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      )
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
        alert("error");
      });
  };

  useEffect(() => {
    getMovies();
  }, []);

  const handleDetailPage = (movie) => {
    navigate(`/detail-movie/${movie.id}`, {
      state: {
        src: "https://image.tmdb.org/t/p/original/" + movie.poster_path,
        title: movie.title,
        overview: movie.overview,
        vote_average: movie.vote_average,
        popularity: movie.popularity,
        release_date: movie.release_date,
      },
    });
  };

  const handleFav = (movie) => {
    const getMovies = localStorage.getItem("favMovies");
    if (getMovies) {
      const parsedMovies = JSON.parse(getMovies);
      parsedMovies.push(movie);
      localStorage.setItem("favMovies", JSON.stringify(parsedMovies));
      dispatch(reduxAction("ADD_FAVORITE", parsedMovies));
    } else {
      localStorage.setItem("favMovies", JSON.stringify([movie]));
      dispatch(reduxAction("ADD_FAVORITE", [movie]));
    }
    alert("Movie added to favorites");
  };

  return (
    <>
      <NavigationBar />
      <div
        className="d-flex flex-wrap justify-content-around "
        style={{ background: toggle ? "#E9DCC9" : "#28282B" }}
      >
        {movies.map((movie) => {
          return (
            <CardMovies
              src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
              title={movie.title}
              key={movie.id}
              onClick={() => handleDetailPage(movie)}
              onClick2={() => handleFav(movie)}
            />
          );
        })}
      </div>
    </>
  );
};

export default NowPlayingMovies;
