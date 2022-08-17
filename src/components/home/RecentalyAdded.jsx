import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { AiFillWindows } from "react-icons/ai";
import { Badge } from "react-bootstrap";
import { Image } from 'react-bootstrap';

const RecentalyAdded = () => {
    const [gameData, setGameData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=release-date", {
                headers: {
                    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                    'X-RapidAPI-Host': process.env.REACT_APP_API_HOST
                }
            })
            const data = await res.json()
            setGameData(data)
            console.log(gameData);
        }
        fetchData()
    }, [])

    return (
        // <Link to="/" className="game-card d-flex  align-items-center">
        //     <div className="gamge-card-left d-flex align-items-center">
        //         <Image
        //             src="https://www.freetogame.com/g/517/thumbnail.jpg"
        //             alt=""
        //             height={140}
        //             width={140}
        //             className="me-4"
        //         />
        //         <div className="gamge-card-right">
        //             <h3 className="fs-6 fw-bold text-secondary mt-2 mb-1">
        //                 Lorem, ipsum dolor.
        //             </h3>
        //             <p className="fs-6 text-secondary m-0 p-0">
        //                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
        //             </p>
        //             <div className="game-card-badgnes d-flex align-items-center">
        //                 <p className="fs-6  me-3 my-0 py-0">
        //                     <Badge bg="danger">
        //                         Category
        //                     </Badge>
        //                 </p>
        //                 <p className="fs-6 me-3 my-0 py-0">
        //                     <Badge bg="success">
        //                         Free
        //                     </Badge>
        //                 </p>
        //                 <p className="fs-2 my-0 py-0">
        //                     <AiFillWindows />
        //                 </p>
        //             </div>
        //         </div>
        //     </div>
        // </Link>
        gameData.map((game) => {
            const { title, thumbnail, short_description, id } = game
            return (
                <Link to="/" className="game-card d-flex  align-items-center my-3" key={id}>
                    <div className="gamge-card-left d-flex align-items-center">
                        <Image
                            src={thumbnail}
                            alt="title"
                            height={140}
                            width={140}
                            className="me-4"
                        />
                        <div className="gamge-card-right">
                            <h3 className="fs-6 fw-bold text-secondary mt-2 mb-1">
                                {title}
                            </h3>
                            <p className="fs-6 text-secondary m-0 p-0">
                                {short_description.slice(0, 80)}
                            </p>
                            <div className="game-card-badgnes d-flex align-items-center">
                                <p className="fs-6  me-3 my-0 py-0">
                                    <Badge bg="danger">
                                        Category
                                    </Badge>
                                </p>
                                <p className="fs-6 me-3 my-0 py-0">
                                    <Badge bg="success">
                                        Free
                                    </Badge>
                                </p>
                                <p className="fs-2 my-0 py-0">
                                    <AiFillWindows />
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            )
        })

    )
}

export default RecentalyAdded