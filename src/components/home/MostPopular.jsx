import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import { AiFillWindows } from "react-icons/ai";
import { FaFirefoxBrowser } from "react-icons/fa";
import { Badge } from "react-bootstrap";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
            setGameData(data.slice(0, 5));
        };
        fetchData();
    }, []);

    if (gameData.length === 0) {
        return (
            <div className="home-most-popular-game-card w-100 my-2 mx-3">
                <SkeletonTheme baseColor="#212529" highlightColor="white">
                    <div className="MP-Skeleton my-2">
                        <Skeleton height={260} width={300} />
                    </div>
                    <div className="MP-Skeleton my-2">
                        <Skeleton height={260} width={300} />
                    </div>
                    <div className="MP-Skeleton my-2">
                        <Skeleton height={260} width={300} />
                    </div>
                    <div className="MP-Skeleton my-2">
                        <Skeleton height={260} width={300} />
                    </div>
                </SkeletonTheme>
            </div>
        );
    }

    return gameData.map((game) => {
        const { title, thumbnail, genre, platform, id } = game;
        return (
            <Link
                to={`/games/id/${id}`}
                className="home-most-popular-game-card d-flex  align-items-center"
                key={id}
            >
                <div className="d-flex align-items-center pt-2">
                    <figure className="m-0">
                        <Image fluid src={thumbnail} alt={title} thumbnail={true} />
                        <div
                            className="d-flex justify-content-around align-items-center position-relative fw-bold"
                            style={{ bottom: "40px" }}
                        >
                            <Badge bg="danger">{genre}</Badge>
                            <Badge bg="dark">Free</Badge>
                            <p className="fs-4 my-0 py-0">
                                {platform === "PC (Windows)" ? (
                                    <AiFillWindows />
                                ) : (
                                    <FaFirefoxBrowser />
                                )}
                            </p>
                        </div>
                    </figure>
                </div>
            </Link>
        );
    });
};

export default MostPopular;
