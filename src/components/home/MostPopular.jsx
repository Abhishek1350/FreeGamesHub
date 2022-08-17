import React from 'react'
import { Link } from "react-router-dom";
import { Image } from 'react-bootstrap';
import { AiFillWindows } from "react-icons/ai";
import { Badge } from "react-bootstrap";


const MostPopular = () => {
    
    return (
        <Link to="/" className="game-card d-flex  align-items-center">
            <div className="gamge-card-left d-flex align-items-center">
                <figure>
                    <Image
                        fluid
                        src='https://www.freetogame.com/g/517/thumbnail.jpg'
                    />
                    <figcaption className=' fw-bold'>
                        <div className='d-flex justify-content-around align-items-center position-relative' style={{ bottom: "32px" }}>
                            <Badge bg="danger" pill>
                                Category
                            </Badge>
                            <Badge bg="success" pill>
                                Free
                            </Badge>
                            <p className="fs-4 my-0 py-0">
                                <AiFillWindows />
                            </p>
                        </div>
                    </figcaption>
                </figure>
            </div>

        </Link>
    )
}

export default MostPopular