import React from "react";
import { Jumbotron, Container } from 'react-bootstrap'

function Heading() {
    return <Jumbotron fluid variant="primary">
        <Container>
            <h1>(React) Google Books Search</h1>
            <p>Search for and Save Books of Interest</p>
        </Container>
    </Jumbotron>
}

export default Heading;