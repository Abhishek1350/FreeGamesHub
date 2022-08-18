import React, { useState, useEffect } from 'react'
import "./game.css"
import { Container, Image, Row, Col, Badge } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import SpinneR from "../SpinneR"
import { AiFillWindows } from "react-icons/ai";
import { FaFirefoxBrowser } from "react-icons/fa";


const Game = () => {
  const { gameId } = useParams();
  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0)
    const fetchData = async () => {
      const res = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`,
        {
          headers: {
            "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
            "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
          },
        }
      );
      const data = await res.json();
      setGameData(data);
    };
    fetchData();
  }, [gameId])

  if (gameData.length === 0) {
    return <SpinneR message="Fetching Data" />
  }

  return (
    <Container fluid className="game-container"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.90), rgba(0, 0, 0, 0.92)), url(${gameData.thumbnail})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <Container className="py-3 game-detail-container">
        <h2 className="text-warning fw-bold fs-2 text-center py-2">
          {gameData.title}
        </h2>
        <Image
          style={{ minWidth: "60%" }}
          className="d-block m-auto"
          fluid
          src={gameData.thumbnail}
          alt={gameData.title}
        />

        <div className="game-info text-white">
          <div className="d-flex align-items-center justify-content-evenly flex-wrap my-1">
            <p className="fs-4  me-3 my-2 py-0">
              <Badge bg="danger">
                {gameData.genre}
              </Badge>
            </p>
            <p className="fs-4  me-3 my-2 py-0">
              <Badge bg="secondary">
                {gameData.release_date}
              </Badge>
            </p>
            <p className="fs-4 me-3 my-2 py-0">
              <Badge bg="info">
                {gameData.publisher}
              </Badge>
            </p>
            <p className="fs-4 me-3 my-2 py-0">
              <Badge bg="success">
                Free
              </Badge>
            </p>
            <p className="fs-1 my-2 py-0">
              {
                gameData.platform === "PC (Windows)" ? <AiFillWindows /> : <FaFirefoxBrowser />
              }
            </p>
          </div>

          <p className="fs-5 py-3">
            {
              gameData.description
            }
          </p>

          <h4 className="text-center fs-3 fw-bold text-info">
            Screenshorts
          </h4>

          <Row>
            {
              gameData.screenshots.map((img) => {
                return (
                  <Col sm key={img.id} className="my-2">
                    <a href={img.image}
                      target="_black"
                    >
                      <Image
                        src={img.image}
                        fluid
                        alt={img.id}
                      />
                    </a>
                  </Col>
                )
              })
            }
          </Row>

        </div>
      </Container>
    </Container>
  )
}

export default Game