import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Image, Spinner } from "react-bootstrap";
import { AiFillWindows } from "react-icons/ai";
import { FaFirefoxBrowser } from "react-icons/fa";
import { Badge } from "react-bootstrap";
import SpinneR from "../SpinneR";

const MostPopular = () => {
    const [gameData, setGameData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(
                "https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=popularity",
                {
                    headers: {
                        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
                        "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
                    },
                }
            );
            const data = await res.json();
            setGameData(data.slice(0, 6));
        };
        fetchData();
    }, []);

    if (gameData.length === 0) {
        return <SpinneR message="Loading Plase Wait"/>
    }

    return gameData.map((game) => {
        const { thumbnail, genre, platform, id } = game;
        return (
            <Link to="/" className="home-most-popular-game-card d-flex  align-items-center my-2" key={id}>
                <div className="d-flex align-items-center">
                    <figure>
                        <Image fluid src={thumbnail} />
                        <figcaption className=" fw-bold">
                            <div
                                className="d-flex justify-content-around align-items-center position-relative"
                                style={{ bottom: "32px" }}
                            >
                                <Badge bg="danger" pill>
                                    {genre}
                                </Badge>
                                <Badge bg="success" pill>
                                    Free
                                </Badge>
                                <p className="fs-4 my-0 py-0">
                                    {
                                        platform === "PC (Windows)" ? <AiFillWindows /> : <FaFirefoxBrowser />
                                    }
                                </p>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </Link>
        );
    });
};

export default MostPopular;
