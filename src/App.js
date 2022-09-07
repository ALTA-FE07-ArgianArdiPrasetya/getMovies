import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContextProvider } from "./context/ContextProvider";
import { useDispatch } from "react-redux";
import { reduxAction } from "./redux/actions/action";

import "./App.css";
import React, { useEffect } from "react";
import NowPlayingMovies from "./pages/NowPlayingMovies";
import DetailMovie from "./pages/DetailMovie";
import MyFavorite from "./pages/MyFavorite";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovies = localStorage.getItem("favMovies");
    if (getMovies) {
      dispatch(reduxAction("ADD_FAVORITE", JSON.parse(getMovies)));
    }
  }, []);

  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<NowPlayingMovies />} />
          <Route path="/detail-movie/:id" element={<DetailMovie />} />
          <Route path="/favorite" element={<MyFavorite />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
};

export default App;
