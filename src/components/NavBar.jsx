import React, { useState } from "react";
import {
    Container,
    Nav,
    Navbar,
    NavDropdown,
    Form,
    Button,
    Image,
} from "react-bootstrap";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const [expanded, setExpanded] = useState(false);
    const [searchInput, setSearchInput] = useState("");
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
            name: "Anime",
            slug: "/games/anime",
        },
        {
            id: 6,
            name: "Strategy",
            slug: "/games/strategy",
        },
        {
            id: 7,
            name: "Fantasy",
            slug: "/games/fantasy",
        },
        {
            id: 8,
            name: "Sci-Fi",
            slug: "/games/sci-fi",
        },
        {
            id: 9,
            name: "Sports",
            slug: "/games/sports",
        },
        {
            id: 10,
            name: "Social",
            slug: "/games/social",
        },
    ];

    // const searchGame = (e) => {
    //     e.preventDefault();
    //     console.log(searchInput);
    // };

    return (
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
                        {/* <Nav.Link
                            className="me-3"
                            onClick={() => setExpanded(false)}
                            as={NavLink}
                            to="/about"
                        >
                            About
                        </Nav.Link> */}
                    </Nav>
                    {/* <Form className="d-flex" onSubmit={searchGame}>
                        <Form.Control
                            type="search"
                            placeholder="Search Free Games"
                            className="me-2"
                            aria-label="Search"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                        <Button variant="outline-success" type="submit">
                            Search
                        </Button>
                    </Form> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
