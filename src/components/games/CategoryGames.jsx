import React, { useEffect, useState, useCallback } from "react";
import SpinneR from "../SpinneR";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFirefoxBrowser } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { AiFillWindows } from "react-icons/ai";
import InfiniteScroll from "react-infinite-scroll-component";
import LazyLoad from "../../commons/LazyLoadImage";

const CategoryGames = ({ fetchData, category }) => {
  const [allGames, setAllGames] = useState([]);
  const [gameData, setGameData] = useState([]);
  const DATA_LENGTH = allGames.length;
  const GAMES_LENGHT = gameData.length;

  const loadGames = useCallback(async () => {
    const data = await fetchData();
    setGameData(
      data
        .filter((game) => {
          return game.genre === category;
        })
        .slice(0, 15)
    );
    setAllGames(data
      .filter((game) => {
        return game.genre === category;
      }));
  }, [fetchData, category]);

  useEffect(() => {
    window.scrollTo(0, 0);
    loadGames();
  }, [loadGames]);

  const fetchMoreData = () => {
    setTimeout(() => {
      setGameData((data) =>
        allGames.slice(data.Length, data.length + 15)
      );
    }, 1000);
  };

  if (gameData.length === 0) {
    return (
      <Container fluid className="bg-black" style={{ height: "85vh" }}>
        <SpinneR message="Fetching Data" fs="fs-1" />
      </Container>
    );
  }

  return (
    <Container fluid className="games__container text-secondary">
      <h2 className="fs-1 fw-bold text-secondary text-center my-1">
        {category} <span className="text-warning fw-bolder">Games</span>
      </h2>

      <Container>
        <InfiniteScroll
          dataLength={GAMES_LENGHT}
          next={fetchMoreData}
          hasMore={GAMES_LENGHT !== DATA_LENGTH}
          loader={
            DATA_LENGTH !== GAMES_LENGHT && (
              <SpinneR message="Fetching More Games" fs="fs-2" />
            )
          }
          style={{ overflow: "hidden" }}
        >
          <Row className="justify-content-around">
            {gameData.map((game) => {
              const {
                title,
                short_description,
                genre,
                platform,
                thumbnail,
                id,
              } = game;
              return (
                <Col xl="3" md="4" className="game-card p-0 my-4 mx-3" key={id}>
                  <Link to={`/games/id/${id}`} className="game-card">
                    <div className="game-card-img">
                      <LazyLoad src={thumbnail} alt={title} style={{width:"100%"}}/>
                    </div>
                    <div className="game-card-body text-secondary  px-3">
                      <div className=" d-flex justify-content-between mt-2">
                        <p className="fs-5 fw-bold mb-1">{title}</p>
                        <p className="fs-5 mb-1">
                          <Badge bg="success">Free</Badge>
                        </p>
                      </div>

                      <div className="fs-6" style={{ textAlign: "justify" }}>
                        <p className="mb-0">
                          {short_description.slice(0, 120)}...
                        </p>
                      </div>

                      <div className=" d-flex justify-content-start py-2">
                        <p className="fs-5 mb-1 me-4">
                          <Badge bg="secondary">{genre}</Badge>
                        </p>
                        <p className="fs-5 mb-1 me-4">
                          <Badge bg="danger">
                            <IoGameController />
                          </Badge>
                        </p>
                        <p className="fs-5 mb-1">
                          <Badge bg="primary">
                            {platform === "PC (Windows)" ? (
                              <AiFillWindows />
                            ) : (
                              <FaFirefoxBrowser />
                            )}
                          </Badge>
                        </p>
                      </div>
                    </div>
                  </Link>
                </Col>
              );
            })}
          </Row>
          {DATA_LENGTH === GAMES_LENGHT && (
            <div className="text-center">
              <h2 className="fs-1 py-3 fw-bold text-secondary text-center my-1">
                No More <span className="text-info fw-bolder">Games</span>
              </h2>
            </div>
          )}
        </InfiniteScroll>
      </Container>
    </Container>
  );
};

export default CategoryGames;
