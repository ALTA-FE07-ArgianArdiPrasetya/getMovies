import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import NowPlayingMovies from "./pages/NowPlayingMovies";
import DetailMovie from "./pages/DetailMovie";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<NowPlayingMovies />} />
        <Route path="/detail-movie/:id" element={<DetailMovie />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
