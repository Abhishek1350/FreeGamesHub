import React from 'react'
import { Container, Spinner } from 'react-bootstrap';

const SpinneR = ({ message,fs }) => {
    return (
        <Container className="py-3">
            <div className="text-center justify-content-center">
                <Spinner animation="border" variant="danger" />
            </div>
            <p className={`text-center text-primary fs-5 ${fs} fw-bold`}>
                {message}
            </p>
        </Container>
    )
}

export default SpinneR