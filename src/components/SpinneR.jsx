import React from 'react'
import { Container, Spinner } from 'react-bootstrap';

const SpinneR = ({ message }) => {
    return (
        <Container>
            <div className="text-center justify-content-center">
                <Spinner animation="border" variant="danger" />
            </div>
            <p className="text-center text-primary fs-4 fw-bold">
                {message}
            </p>
        </Container>
    )
}

export default SpinneR