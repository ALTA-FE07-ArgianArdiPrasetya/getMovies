import React from "react";
import { useMoveContext } from "../context/ContextProvider";
import { useSelector } from "react-redux";

import NavigationBar from "../components/NavigationBar";
import CardFavoriteMovie from "../components/CardFavoriteMovie";

const MyFavorite = () => {
  const { toggle } = useMoveContext();
  const favorites = useSelector((state) => state.favorites);

  return (
    <>
      <NavigationBar />
      <div
        className="d-flex flex-wrap justify-content-around "
        style={{ background: toggle ? "#E9DCC9" : "#28282B" }}
      >
        {favorites.map((movie) => {
          return (
            <CardFavoriteMovie
              src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
              title={movie.title}
              key={movie.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default MyFavorite;
