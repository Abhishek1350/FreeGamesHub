import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiFillWindows } from "react-icons/ai";
import { FaFirefoxBrowser } from "react-icons/fa";
import { Badge } from "react-bootstrap";
import { Image } from "react-bootstrap";
import SpinneR from "../SpinneR";

const RecentalyAdded = () => {
    const [gameData, setGameData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(
                "https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=release-date",
                {
                    headers: {
                        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
                        "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
                    },
                }
            );
            const data = await res.json();
            setGameData(data.slice(0, 7));
        };
        fetchData();
    }, []);

    if (gameData.length === 0) {
        return <SpinneR message="Loading" />;
    }

    return gameData.map((game) => {
        const { title, thumbnail, short_description, genre, platform, id } = game;
        return (
            <Link
                to={`/games/id/${id}`}
                className="home-recentaly-added-game-card d-flex  align-items-center my-3"
                key={id}
            >
                <div className="gamge-card-left d-flex align-items-center">
                    <Image
                        src={thumbnail}
                        alt={title}
                        height={140}
                        width={140}
                        className="me-3"
                    />
                    <div className="gamge-card-right pe-1">
                        <h3 className="fs-6 fw-bold text-secondary mt-2 mb-1">{title}</h3>
                        <p className="fs-6 text-secondary m-0 p-0">
                            {short_description.slice(0, 70)}...
                        </p>
                        <div className="game-card-badgnes d-flex align-items-center">
                            <p className="fs-6  me-3 my-0 py-0">
                                <Badge bg="danger">{genre}</Badge>
                            </p>
                            <p className="fs-6 me-3 my-0 py-0">
                                <Badge bg="success">Free</Badge>
                            </p>
                            <p className="fs-2 my-0 py-0">
                                {platform === "PC (Windows)" ? (
                                    <AiFillWindows />
                                ) : (
                                    <FaFirefoxBrowser />
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        );
    });
};

export default RecentalyAdded;
