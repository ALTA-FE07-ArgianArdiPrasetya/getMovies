import "./App.css";
import NowPlayingMovies from "./pages/NowPlayingMovies";

import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailMovie from "./pages/DetailMovie";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<NowPlayingMovies />} />
          <Route path="/detail-movie" element={<DetailMovie />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
