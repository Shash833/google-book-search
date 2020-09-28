import React, { useContext, useEffect } from "react";
import { Nav, Navbar } from 'react-bootstrap'
import "./style.css"
import { UserContext } from '../../Context/userContext'
import DB from "../../utils/DB"

function Navigation() {
    const context = useContext(UserContext)

    useEffect(() => {
        loadUser()
    }, [...Object.values(context)])

    async function loadUser() {
        try {
            const { data } = await DB.getUser()
            context.setUser(data)
        }
        catch (error) { console.log(error) }
    }

    return <Navbar expand="lg" sticky="top">
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
