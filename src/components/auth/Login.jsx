import React, { useState } from 'react'
import { Modal, Button, Form, FloatingLabel, Spinner } from 'react-bootstrap'
import { AiOutlineLogin } from 'react-icons/ai'
import { SiGnuprivacyguard } from 'react-icons/si'

const Login = ({ showLogin, handleOpenLogin, handleClose, showSignup, handleOpenSignup, setUser }) => {
    const [isLoading, setLoading] = useState(false);
    const [inputData, setInputData] = useState({ name: "", email: "", password: "" })
    const [error, setError] = useState({
        error: false,
        message: ""
    })
    const authUrl = process.env.REACT_APP_AUTH_URL

    const handleChange = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value })
    }


    const handleLogin = () => {
        const { email, password } = inputData;
        if (!email || !password) {
            setError({
                error: true,
                message: "Please enter all the fields"
            })
            return
        }
        setError({
            error: false,
            message: ""
        })
        setLoading(true);
        fetch(`${authUrl}login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        }).then((res) => res.json()).then((data) => {
            if (data.success) {
                setLoading(false);
                localStorage.setItem("user", JSON.stringify(data.user))
                setUser(data.user)
                setInputData({ name: "", email: "", password: "" })
                setLoading(false);
                handleClose();
            } else {
                setError({
                    error: true,
                    message: data.message
                })
                setInputData({ name: "", email: "", password: "" })
                setLoading(false);
            }
        }).catch((err) => {
            console.log(err)
            setLoading(false);
        })
    }

    const handleSignUp = () => {
        if (!inputData.name || !inputData.email || !inputData.password) {
            setError({
                error: true,
                message: "Please enter all the fields"
            })
            return
        }
        setLoading(true);
        setError({
            error: false,
            message: ""
        })
        fetch(`${authUrl}register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(inputData),
        }).then((res) => res.json()).then((data) => {
            if (data.success) {
                setError({
                    error: false,
                    message: ""
                })
                setLoading(false);
                handleOpenLogin();
            } else {
                setError({
                    error: true,
                    message: data.message
                })
                setLoading(false);
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    return showLogin ? (
        <div>
            <Modal show={showLogin} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title >Login Now</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="py-2">
                        <Form.Group className="mb-4">
                            <FloatingLabel
                                label="Email address"
                                className="mb-3"
                            >
                                <Form.Control type="email" name="email" value={inputData.email} onChange={handleChange} />
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group
                            className="mb-4"
                        >
                            <FloatingLabel label="Password">
                                <Form.Control type="password" name="password" value={inputData.password} onChange={handleChange} />
                            </FloatingLabel>
                        </Form.Group>
                        <p className='text-center text-danger'>
                            {
                                error.error ? error.message : ""
                            }
                        </p>
                        <Form.Group className="my-2 d-flex justify-content-center">
                            <Button
                                variant="outline-primary"
                                disabled={isLoading}
                                onClick={!isLoading ? handleLogin : null}
                                className="w-50 fs-4 fw-bold"
                            >
                                {isLoading ? (<Spinner animation="border" variant="danger" />) : (<><AiOutlineLogin /> Login</>)}
                            </Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <p className="">
                        Don't have an account? <Button variant="link" onClick={handleOpenSignup}>Signup Now</Button>
                    </p>
                </Modal.Footer>
            </Modal>
        </div>
    ) : showSignup ? (
        <Modal show={showSignup} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title >Signup Now</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className="py-2">
                    <Form.Group className="mb-4">
                        <FloatingLabel
                            label="Your Name"
                            className="mb-3"
                        >
                            <Form.Control type="text" name="name" value={inputData.name} onChange={handleChange} />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <FloatingLabel
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control type="email" name="email" value={inputData.email} onChange={handleChange} />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group
                        className="mb-4"
                    >
                        <FloatingLabel label="Password">
                            <Form.Control type="password" name="password" value={inputData.password} onChange={handleChange} />
                        </FloatingLabel>
                    </Form.Group>
                    <p className='text-center text-danger'>
                        {
                            error.error ? error.message : ""
                        }
                    </p>
                    <Form.Group className="my-2 d-flex justify-content-center">
                        <Button
                            variant="outline-info"
                            disabled={isLoading}
                            onClick={!isLoading ? handleSignUp : null}
                            className="w-50 fs-4 fw-bold"
                        >
                            {isLoading ? (<Spinner animation="border" variant="danger" />) : (<><SiGnuprivacyguard /> Signup</>)}
                        </Button>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer className="justify-content-center">
                <p className="">
                    Already have an account? <Button variant="link" onClick={handleOpenLogin}>Login</Button>
                </p>
            </Modal.Footer>
        </Modal>
    ) : null
}

export default Login