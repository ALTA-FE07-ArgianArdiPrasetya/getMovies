import React from "react";
import NavigationBar from "../components/NavigationBar";
import { useLocation } from "react-router-dom";

const DetailMovie = () => {
  const location = useLocation();
  return (
    <>
      <NavigationBar />
      <div className="bg-dark my-3 mx-auto w-75 border d-flex ">
        <figure className="w-25 m-3 ">
          <img
            src={location.state.src}
            alt="location.state.title"
            className="img-movie  p-1 w-100 border border-4 border-info"
          />
        </figure>
        <div className="w-75">
          <h3 className="title text-white  ">{location.state.title}</h3>
          <h5 className="text-white">
            Popularity: {location.state.popularity}
          </h5>
          <h5 className="text-white">Vote: {location.state.vote_average}</h5>
          <h5 className="text-white">
            Release Date: {location.state.release_date}
          </h5>

          <p className="text-white mt-5">{location.state.overview}</p>
          <h6>fdfdf</h6>
        </div>
      </div>
    </>
  );
};

export default DetailMovie;
