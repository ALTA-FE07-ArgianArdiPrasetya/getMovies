import React from "react";
import NavigationBar from "../components/NavigationBar";
import { useLocation } from "react-router-dom";
import { useMoveContext } from "../context/ContextProvider";

const DetailMovie = () => {
  const location = useLocation();
  const { toggle } = useMoveContext();
  return (
    <>
      <NavigationBar />
      <div
        style={{ background: toggle ? "#E9DCC9" : " 	#28282B", height: 550 }}
        className="pt-5 pb-4 "
      >
        <div className="mx-auto w-75 border d-flex ">
          <figure className="w-25 m-3 ">
            <img
              src={location.state.src}
              alt="location.state.title"
              className="img-movie  p-1 w-100 border border-4 border-info"
            />
          </figure>
          <div className="w-75">
            <h3
              className="title"
              style={{ color: toggle ? "#36454F" : "#F9F6EE" }}
            >
              {location.state.title}
            </h3>
            <h5 style={{ color: toggle ? "#36454F" : "#F9F6EE" }}>
              Popularity: {location.state.popularity}
            </h5>
            <h5 style={{ color: toggle ? "#36454F" : "#F9F6EE" }}>
              Vote: {location.state.vote_average}
            </h5>
            <h5 style={{ color: toggle ? "#36454F" : "#F9F6EE" }}>
              Release Date: {location.state.release_date}
            </h5>

            <p style={{ color: toggle ? "#36454F" : "#F9F6EE" }}>
              {location.state.overview}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailMovie;
