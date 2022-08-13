import React from 'react'
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container fluid className="home__container d-flex flex-column align-items-center" >
      <h2 className="fs-1 fw-bold text-secondary text-center my-3">
        Find & track the best
        <span className='text-warning fw-bolder'>free-to-play</span>
        games!
      </h2>
      <p className="text-secondary fw-normal text-center fs-4">
        Track what you've played and search for what to play next! Plus get free premium loot!
      </p>
      <Container className="d-flex justify-content-center gap-4">
        <Link to="/"><Button variant='outline-info' className='fw-bold fs-4 my-2'>PC Games</Button></Link>
        <Link to="/"><Button variant='outline-primary' className='fw-bold fs-4 my-2'>Web Games</Button></Link>
      </Container>


    </Container>
  )
}

export default Home