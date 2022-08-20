import React, { useEffect } from "react";
import "./home.css"
import { Container, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillWindows } from "react-icons/ai";
import { FaFirefoxBrowser } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import RecentalyAdded from "./RecentalyAdded";
import MostPopular from "./MostPopular";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <>
      <Container
        fluid
        className="home__container d-flex flex-column align-items-center"
      >
        <h1 className="fs-1 fw-bold text-secondary text-center my-3">
          Find & track the best{" "}
          <span className="text-warning fw-bolder">free-to-play</span> games!
        </h1>
        <p className="text-secondary fw-normal text-center fs-4">
          Track what you've played and search for what to play next! Plus get
          free premium loot!
        </p>
        <Container className="d-flex justify-content-center gap-4">
          <Link to="/games/pc">
            <Button variant="outline-primary" size="lg" className="fw-bold fs-4 my-2">
              <AiFillWindows /> Games
            </Button>
          </Link>
          <Link to="/games/webbrowser">
            <Button variant="outline-info" size="lg" className="fw-bold fs-4 my-2">
              <FaFirefoxBrowser /> Games
            </Button>
          </Link>
        </Container>
      </Container>
      <Container
        className="recent-added py-3 home__container-2"
        fluid
      >
        <Container className="py-0 d-flex justify-content-center">
          <Row>
            <Col md="7" className="home-recentaly-added">
              <h3 className="fs-2 fw-bold text-secondary py-3 text-center">
                Recently Added
              </h3>
              <RecentalyAdded />
            </Col>

            <Col md='5' className="home-most-popular">
              <h3 className="fs-2 fw-bold text-secondary py-3 text-center">
                Most Popular
              </h3>
              <MostPopular />
            </Col>
          </Row>
        </Container>
        <p className="text-center">
          <Link to="/games/all" className="btn btn-outline-secondary fs-5 fw-bold">
            More Games <IoGameController />
          </Link>
        </p>
      </Container>
    </>
  );
};

export default Home;
