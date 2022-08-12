import React, { useState } from 'react'
import { Container, Nav, Navbar, NavDropdown, Form, Button, Image } from 'react-bootstrap';
import logo from "../images/logo.png"
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    const [expanded, setExpanded] = useState(false);
    const [searchinput, setSearchinput] = useState("")

    const searchGame = (e) => {
        e.preventDefault();
        console.log(searchinput);
    }

    return (
        <Navbar collapseOnSelect expand="lg" expanded={expanded} bg="dark" variant="dark" className="fw-bold fs-5 py-1">
            <Container fluid="sm">
                <Navbar.Brand onClick={() => setExpanded(false)} as={NavLink} to="/" >
                    <Image src={logo} alt="" width={50} roundedCircle={true} style={{ border: "1px solid ghostwhite" }} />
                    <span className="text-info fs-4 mx-4">Free Games Hub</span>
                </Navbar.Brand>
                <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => setExpanded(false)} as={NavLink} to="/">Home</Nav.Link>
                        <NavDropdown title="Category" id="collasible-nav-dropdown"  >
                            <NavDropdown.Item onClick={() => setExpanded(false)} className="fw-bold fs-6" as={NavLink} to="/all">All</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => setExpanded(false)} className="fw-bold fs-6" as={NavLink} to="/abc">
                                Another action
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Platform" id="collasible-nav-dropdown"  >
                            <NavDropdown.Item onClick={() => setExpanded(false)} className="fw-bold fs-6" as={NavLink} to="/pc">PC</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => setExpanded(false)} className="fw-bold fs-6" as={NavLink} to="/webbrowser">
                                Web Browser
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex" onSubmit={searchGame}>
                        <Form.Control
                            type="search"
                            placeholder="Search Free Games"
                            className="me-2"
                            aria-label="Search"
                            value={searchinput}
                            onChange={(e) => setSearchinput(e.target.value)}
                        />
                        <Button variant="outline-success" type='submit'>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar