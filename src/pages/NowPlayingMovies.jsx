import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import NavigationBar from "../components/NavigationBar";
import CardMovies from "../components/CardMovies";
import { useMoveContext } from "../context/ContextProvider";

const baseUrl = "https://api.themoviedb.org/";
const page = 1;

const NowPlayingMovies = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const { toggle } = useMoveContext();

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

  return (
    <>
      {/* style={{ background: toggle ? "#E9DCC9" : " 	#28282B" }} */}
      <NavigationBar />
      <div className="d-flex flex-wrap justify-content-around ">
        {movies.map((movie) => {
          return (
            <CardMovies
              src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
              title={movie.title}
              key={movie.id}
              onClick={() => handleDetailPage(movie)}
            />
          );
        })}
      </div>
    </>
  );
};

export default NowPlayingMovies;
