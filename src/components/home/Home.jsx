import React from "react";
import "./home.css"
import { Container, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import RecentalyAdded from "./RecentalyAdded";
import MostPopular from "./MostPopular";

const Home = () => {
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
          <Link to="/">
            <Button variant="outline-info" className="fw-bold fs-4 my-2">
              PC Games
            </Button>
          </Link>
          <Link to="/">
            <Button variant="outline-primary" className="fw-bold fs-4 my-2">
              Web Games
            </Button>
          </Link>
        </Container>
      </Container>
      <Container
        className="recent-added py-3"
        style={{ background: "#0d0e10" }}
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
              <h3 className="fs-2 fw-bold text-secondary py-3">
                Most Popular
              </h3>
              <MostPopular />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Home;
