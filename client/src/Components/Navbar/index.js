import React from "react";
import { Nav, Navbar } from 'react-bootstrap'

function Navigation() {
    return <Navbar bg="light" expand="lg">
        <Navbar.Brand>Google Books</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/">Book Search</Nav.Link>
                <Nav.Link href="/saved">Saved Books</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
}

export default Navigation;
