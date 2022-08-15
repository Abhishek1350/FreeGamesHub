import React from "react";
import { Container, Button, Row, Col, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillWindows } from "react-icons/ai";

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
        <Container className="py-3">
          <Row className="justify-content-evenly">
            <Col md="auto">
              <h3 className="fs-2 fw-bold text-secondary mb-4">
                Recently Added Games
              </h3>
              <Link to="/" className="game-card d-flex  align-items-center">
                <div className="gamge-card-left d-flex align-items-center">
                  <img
                    src="https://www.freetogame.com/g/517/thumbnail.jpg"
                    alt=""
                    height={120}
                    width={130}
                    className="me-4"
                  />
                  <div className="gamge-card-right">
                    <h3 className="fs-5 fw-bold text-secondary mt-2 mb-1">
                      Recently Added Games
                    </h3>
                    <p className="fs-6 text-secondary m-0 p-0">
                      Lorem ipsum dolor sit amet consectetur.
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
            </Col>

            <Col  md='auto'>
              <h3 className="fs-2 fw-bold text-secondary">Another Category</h3>
              <Link to="/" className="game-card d-flex  align-items-center">
                <div className="gamge-card-left d-flex align-items-center">
                  <img
                    src="https://www.freetogame.com/g/517/thumbnail.jpg"
                    alt=""
                    height={120}
                    width={130}
                    className="me-4"
                  />
                  <div className="gamge-card-right">
                    <h3 className="fs-5 fw-bold text-secondary mt-2 mb-1">
                      Recently Added Games
                    </h3>
                    <p className="fs-6 text-secondary m-0 p-0">
                      Lorem ipsum dolor sit amet consectetur.
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
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Home;
