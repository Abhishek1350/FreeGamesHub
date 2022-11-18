import React, { useState, useEffect } from "react";
import "./game.css";
import { Container, Image, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { AiFillWindows } from "react-icons/ai";
import { FaFirefoxBrowser } from "react-icons/fa";
import LazyLoad from "../../commons/LazyLoadImage";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Game = () => {
  const { gameId } = useParams();
  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
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
  }, [gameId]);

  if (gameData.length === 0) {
    return (
      <Container
        fluid
        className="d-flex justify-content-center align-items-center flex-column bg-secondary"
      >
        <SkeletonTheme baseColor="#212529" highlightColor="white">
          <div className="mb-2">
            <Skeleton height={20} width={300} />
          </div>
          <div className="loading-img-game mb-2">
            <Skeleton height="100%" width="100%" />
          </div>
          <div className="mb-2">
            <Skeleton height={50} width={300} />
          </div>
          <div className="loading-img-game mb-2">
            <Skeleton height="100%" width="100%" />
          </div>
        </SkeletonTheme>
      </Container>
    );
  }

  return (
    <Container
      fluid
      className="game-container"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.90), rgba(0, 0, 0, 0.90)), url(${gameData.thumbnail})`,
        backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed"
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
          <h3 className="fs-3 pt-5 text-info fw-bold">Game Description</h3>
          <p className="fs-6">{gameData.description}</p>

          <Row className="my-4 fs-5">
            <h3 className="fs-3 pb-1 text-info fw-bold">Game Details</h3>
            <Col md="4 ">
              <span className="text-muted fw-bold ">
                Title
                <br />
              </span>{" "}
              <p>{gameData?.title}</p>
            </Col>
            <Col md="4 ">
              <span className="text-muted fw-bold ">
                Developer
                <br />
              </span>{" "}
              <p>{gameData?.developer}</p>
            </Col>
            <Col md="4 ">
              <span className="text-muted fw-bold ">
                Publisher
                <br />
              </span>{" "}
              <p>{gameData?.publisher}</p>
            </Col>
            <Col md="4 ">
              <span className="text-muted fw-bold ">
                Release Date
                <br />
              </span>{" "}
              <p>{gameData?.release_date}</p>
            </Col>
            <Col md="4 ">
              <span className="text-muted fw-bold ">
                Category
                <br />
              </span>{" "}
              <p>{gameData?.genre}</p>
            </Col>
            <Col md="4 ">
              <span className="text-muted fw-bold ">
                Platform
                <br />
              </span>{" "}
              {gameData.platform === "Windows" ? (
                <span>
                  {" "}
                  Windows <AiFillWindows />
                </span>
              ) : (
                <span>
                  {" "}
                  Web Browser <FaFirefoxBrowser />{" "}
                </span>
              )}
            </Col>
          </Row>

          <Row>
            <h4 className="text-center fs-3 fw-bold text-info">Screenshorts</h4>
            {gameData.screenshots.map((img) => {
              return (
                <Col sm key={img.id} className="my-3">
                  <a href={img.image} target="_black">
                    <LazyLoad
                      src={img.image}
                      alt={img.id}
                      style={{ width: "100%" }}
                    />
                  </a>
                </Col>
              );
            })}
          </Row>

          {gameData.minimum_system_requirements ? (
            <Row className="pt-3">
              <h4 className="text-center fs-3 fw-bold text-info py-3">
                Minimum System Requirements{" "}
                <span className="text-primary">
                  <AiFillWindows />
                </span>
              </h4>
              <Col md="6" className="fs-5 fw-bold">
                <span className="text-muted fw-bold">
                  OS
                  <br />
                </span>{" "}
                <p className="fw-normal">
                  {" "}
                  {gameData.minimum_system_requirements?.os}{" "}
                </p>{" "}
                <span className="text-muted fw-bold">
                  Memory
                  <br />
                </span>{" "}
                <p className="fw-normal">
                  {" "}
                  {gameData.minimum_system_requirements?.memory}{" "}
                </p>{" "}
                <span className="text-muted fw-bold">
                  Storage
                  <br />
                </span>{" "}
                <p className="fw-normal">
                  {gameData.minimum_system_requirements?.storage}
                </p>
              </Col>

              <Col md="6" className="fs-5 ">
                <span className="text-muted fw-bold">
                  Processor
                  <br />
                </span>
                <p className="fw-normal">
                  {gameData.minimum_system_requirements?.processor}
                </p>
                <span className="text-muted fw-bold">
                  Graphics
                  <br />
                </span>
                <p className="fw-normal">
                  {gameData.minimum_system_requirements?.graphics}
                </p>
              </Col>
            </Row>
          ) : (
            ""
          )}
          <Container className="d-flex justify-content-center py-4">
            <a
              href={gameData.game_url}
              target="_blank"
              className="btn btn-outline-primary btn-lg fs-1 fw-bold"
              rel="noreferrer"
            >
              {gameData.platform === "Windows" ? (
                <span>
                  {" "}
                  Get Now <AiFillWindows />
                </span>
              ) : (
                <span>
                  {" "}
                  Play Now <FaFirefoxBrowser />{" "}
                </span>
              )}
            </a>
          </Container>
        </div>
      </Container>
    </Container>
  );
};

export default Game;
