import React, { useState, useEffect } from "react";
import {
    Container,
    Nav,
    Navbar,
    NavDropdown,
    Image,
    Button,
} from "react-bootstrap";
import logo from "../images/logo.webp";
import { NavLink } from "react-router-dom";
import { AiOutlineLogin } from 'react-icons/ai'
import { SiGnuprivacyguard } from 'react-icons/si'
import Login from "./auth/Login";

const NavBar = () => {
    const [expanded, setExpanded] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);


    const handleClose = () => {
        setShowLogin(false);
        setShowSignup(false);
    };

    const handleOpenSignup = () => {
        setShowLogin(false)
        setShowSignup(true);
    }

    const handleOpenLogin = () => {
        setShowLogin(true)
        setShowSignup(false);
    }

    const categories = [
        {
            id: 1,
            name: "All",
            slug: "/games/all",
        },
        {
            id: 2,
            name: "MMORPG",
            slug: "/games/mmorpg",
        },
        {
            id: 3,
            name: "Racing",
            slug: "/games/racing",
        },
        {
            id: 4,
            name: "Shooter",
            slug: "/games/shooter",
        },

        {
            id: 5,
            name: "Strategy",
            slug: "/games/strategy",
        },
        {
            id: 6,
            name: "Fantasy",
            slug: "/games/fantasy",
        },
        {
            id: 7,
            name: "Sports",
            slug: "/games/sports",
        },
        {
            id: 8,
            name: "Social",
            slug: "/games/social",
        },
    ];

    useEffect(() => {
        // Waking up the backend server
        fetch(process.env.REACT_APP_AUTH_URL).then((res) => { })
    }, [])

    return (
        <>
            <Navbar
                collapseOnSelect
                expand="lg"
                expanded={expanded}
                bg="dark"
                variant="dark"
                className="fw-bold fs-5 py-1"
                sticky="top"
            >
                <Container fluid="sm">
                    <Navbar.Brand onClick={() => setExpanded(false)} as={NavLink} to="/">
                        <Image
                            src={logo}
                            alt="logo"
                            width={50}
                            roundedCircle={true}
                            style={{ border: "2px solid ghostwhite" }}
                        />
                        <span className="text-info fs-4 me-4 mx-3">Free Games Hub</span>
                    </Navbar.Brand>
                    <Navbar.Toggle
                        onClick={() => setExpanded(expanded ? false : "expanded")}
                        aria-controls="responsive-navbar-nav"
                    />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link
                                className="me-3"
                                style={
                                    ({ isActive }) => (isActive ? {
                                        borderBottom: "2px solid #007bff",
                                    } : {
                                        borderBottom: "0",
                                    })
                                }
                                onClick={() => setExpanded(false)}
                                as={NavLink}
                                to="/"
                            >
                                Home
                            </Nav.Link>
                            <NavDropdown
                                title="Platform"
                                id="collasible-nav-dropdown"
                                className="me-3"
                            >
                                <NavDropdown.Item
                                    onClick={() => setExpanded(false)}
                                    className="fw-bold fs-6"
                                    as={NavLink}
                                    to="/games/pc"
                                >
                                    PC
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    onClick={() => setExpanded(false)}
                                    className="fw-bold fs-6"
                                    as={NavLink}
                                    to="/games/webbrowser"
                                >
                                    Web Browser
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                title="Category"
                                id="collasible-nav-dropdown"
                                className="me-3"
                            >
                                {categories.map((category) => {
                                    const { id, name, slug } = category;
                                    return (
                                        <NavDropdown.Item
                                            onClick={() => setExpanded(false)}
                                            className="fw-bold fs-6"
                                            as={NavLink}
                                            to={slug}
                                            key={id}
                                        >
                                            {name}
                                        </NavDropdown.Item>
                                    );
                                })}
                            </NavDropdown>
                        </Nav>
                        <div className='d-flex'>
                            {
                                !user ? (
                                    <>
                                        <Button
                                            variant="outline-primary"
                                            className="fw-bold fs-6 me-3"
                                            onClick={() => setShowLogin(true)}
                                        >
                                            <AiOutlineLogin /> Login
                                        </Button>

                                        <Button
                                            variant="outline-info"
                                            className="fw-bold fs-6"
                                            onClick={() => setShowSignup(true)}
                                        >
                                            <SiGnuprivacyguard /> Signup
                                        </Button>
                                    </>
                                ) : (

                                    <>
                                        <Navbar.Brand>
                                            {
                                                user.name
                                            }
                                        </Navbar.Brand>
                                        <Button
                                            variant="outline-danger"
                                            className="fw-bold"
                                            onClick={
                                                () => {
                                                    setUser(null)
                                                    localStorage.removeItem('user')
                                                }
                                            }
                                        >
                                            <SiGnuprivacyguard /> Logout
                                        </Button>
                                    </>
                                )
                            }

                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container>
                <Login
                    showLogin={showLogin}
                    handleOpenLogin={handleOpenLogin}
                    handleOpenSignup={handleOpenSignup}
                    showSignup={showSignup}
                    handleClose={handleClose}
                    setUser={setUser}
                />
            </Container>
        </>
    );
};


export default NavBar;
