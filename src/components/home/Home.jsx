import React from "react";
import { Container, Button, Row, Col, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillWindows } from "react-icons/ai";
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
        <Container className="py-2 d-flex justify-content-evenly">
          <Row>
            <Col md="7">
              <h3 className="fs-2 fw-bold text-secondary mb-3">
                Recently Added
              </h3>
              <RecentalyAdded />
            </Col>

            <Col md='5'>
              <h3 className="fs-2 fw-bold text-secondary mb-3">
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
