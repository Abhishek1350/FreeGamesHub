import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Home from "./components/home/Home";
import Game from "./components/games/Game"
import Games from "./components/games/Games"
import PlatformGames from "./components/games/PlatformGames"
import CategoryGames from "./components/games/CategoryGames"
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
    const fetchData = async () => {
        const res = await fetch(
            "https://free-to-play-games-database.p.rapidapi.com/api/games",
            {
                headers: {
                    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
                    "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
                },
            }
        );
        const data = await res.json();
        return data;

    };

    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/games/all" element={<Games fetchData={fetchData} />} />
                <Route path="/games/pc" element={<PlatformGames fetchData={fetchData} platform="PC (Windows)" />} />
                <Route path="/games/webbrowser" element={<PlatformGames fetchData={fetchData} platform="Web Browser" />} />
                <Route path="/games/mmorpg" element={<CategoryGames fetchData={fetchData} category="MMORPG" />} />
                <Route path="/games/racing" element={<CategoryGames fetchData={fetchData} category="Racing" />} />
                <Route path="/games/shooter" element={<CategoryGames fetchData={fetchData} category="Shooter" />} />
                <Route path="/games/strategy" element={<CategoryGames fetchData={fetchData} category="Strategy" />} />
                <Route path="/games/fantasy" element={<CategoryGames fetchData={fetchData} category="Fantasy" />} />
                <Route path="/games/sports" element={<CategoryGames fetchData={fetchData} category="Sports" />} />
                <Route path="/games/social" element={<CategoryGames fetchData={fetchData} category="Social" />} />
                <Route path="/games/id/:gameId" element={<Game />} />
                <Route path="*" element={<Home />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
