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

    const searchGame = (e) => {
        e.preventDefault();
        console.log(searchInput);
    };

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
                        alt=""
                        width={50}
                        roundedCircle={true}
                        style={{ border: "1px solid ghostwhite" }}
                    />
                    <span className="text-info fs-4 me-4 mx-3">Free Games Hub</span>
                </Navbar.Brand>
                <Navbar.Toggle
                    onClick={() => setExpanded(expanded ? false : "expanded")}
                    aria-controls="responsive-navbar-nav"
                />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="me-3" onClick={() => setExpanded(false)} as={NavLink} to="/">
                            Home
                        </Nav.Link>
                        <NavDropdown title="Platform" id="collasible-nav-dropdown" className="me-3">
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
                        <NavDropdown title="Category" id="collasible-nav-dropdown" className="me-3">
                            <NavDropdown.Item
                                onClick={() => setExpanded(false)}
                                className="fw-bold fs-6"
                                as={NavLink}
                                to="/games/all"
                            >
                                All
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                onClick={() => setExpanded(false)}
                                className="fw-bold fs-6"
                                as={NavLink}
                                to="/games/abxc"
                            >
                                Another action
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className="me-3" onClick={() => setExpanded(false)} as={NavLink} to="/about">
                            About
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex" onSubmit={searchGame}>
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
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
