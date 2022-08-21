import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Home from "./components/home/Home";
import Game from "./components/games/Game"
import Games from "./components/games/Games"
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {

    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/games/all" element={<Games  />} />
                <Route path="/games/pc" element={<Games platform="pc" />} />
                <Route path="/games/webbrowser" element={<Games platform="browser" />} />
                <Route path="/games/mmorpg" element={<Games category="mmorpg" />} />
                <Route path="/games/racing" element={<Games category="racing" />} />
                <Route path="/games/shooter" element={<Games category="shooter" />} />
                <Route path="/games/anime" element={<Games category="anime" />} />
                <Route path="/games/strategy" element={<Games category="strategy" />} />
                <Route path="/games/fantasy" element={<Games category="fantasy" />} />
                <Route path="/games/sci-fi" element={<Games category="sci-fi" />} />
                <Route path="/games/sports" element={<Games category="sports" />} />
                <Route path="/games/social" element={<Games category="social" />} />
                <Route path="/games/id/:gameId" element={<Game />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
