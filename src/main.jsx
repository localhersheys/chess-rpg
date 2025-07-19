import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Game from "./Game.jsx";
import Errorpage from "./Errorpage.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:gameid" element={<Game />} />
        <Route path="/error" element={<Errorpage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
