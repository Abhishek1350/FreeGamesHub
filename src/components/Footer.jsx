import React from 'react'
import { Container } from 'react-bootstrap'
import {
    AiFillGithub,
    AiFillTwitterCircle,
    AiFillLinkedin
} from "react-icons/ai";

const Footer = () => {
    return (
        <Container fluid className='bg-dark py-2'>
            <footer>
                <Container>
                    <h4
                        className="fw-bold fs-2 text-warning text-center">
                        Follow
                    </h4>
                    <div className="social-icons fs-1 d-flex justify-content-center my-3">
                        <a
                            href="https://github.com/abhishek1350"
                            className="text-white"
                            target="_black"
                        >
                            <AiFillGithub />
                        </a>
                        <a
                            href="https://twitter.com/abhishek1350"
                            className="text-info mx-5"
                            target="_black"
                        >
                            <AiFillTwitterCircle />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/abhishek-bhardwaj-76b9a721b"
                            className="text-primary"
                            target="_black"
                        >
                            <AiFillLinkedin />
                        </a>
                    </div>
                    <p className="text-center fs-6 text-secondary">
                        Thanks to {" "}
                        <a
                            href="https://www.freetogame.com/api-doc"
                            target="_blank"
                            className="text-primary"
                        >
                            freetogame.com
                        </a> {" "} &
                        <a
                            href="https://rapidapi.com/digiwalls/api/free-to-play-games-database"
                            target="_blank"
                            className="text-primary"
                        >
                            {" "} rapidapi.com
                        </a> {" "}
                        for providing API
                    </p>
                </Container>
            </footer>
        </Container>
    )
}

export default Footer