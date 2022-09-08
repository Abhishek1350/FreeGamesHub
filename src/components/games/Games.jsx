import React, { useState, useEffect } from "react";
import SpinneR from "../SpinneR";
import { Container, Row, Col, Image, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFirefoxBrowser } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { AiFillWindows } from "react-icons/ai";
import InfiniteScroll from "react-infinite-scroll-component";

const Games = ({ fetchData }) => {
  const [allGames, setAllGames] = useState([]);
  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchGames = async () => {
      const data = await fetchData();
      setGameData(data.slice(0, 15));
      setAllGames(data)
    }
    fetchGames();
  }, []);

  const fetchMoreData = () => {
    setTimeout(() => {
      setGameData(allGames.slice(0, gameData.length + 15));
    }, 1500);
  }

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
        Here Are All <span className="text-warning fw-bolder">Games</span>
      </h2>

      <Container>
        <InfiniteScroll
          dataLength={gameData.length}
          next={fetchMoreData}
          hasMore={gameData.length !== allGames.length}
          loader={
            allGames.length !== gameData.length && (
              <SpinneR message="Fetching More Games" fs="fs-2" />
            )
          }
          style={{ overflow: "hidden" }}
        >
          <Row className="justify-content-around">
            {gameData.map((game) => {
              const { title, short_description, genre, platform, thumbnail, id } =
                game;
              return (
                <Col xl="3" md="4" className="game-card p-0 my-4 mx-3" key={id}>
                  <Link to={`/games/id/${id}`} className="game-card">
                    <div className="game-card-img">
                      <Image fluid src={thumbnail} alt={title} />
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
        </InfiniteScroll>
      </Container>
    </Container>
  );
};

export default Games;
