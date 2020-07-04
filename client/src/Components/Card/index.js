import React from "react";
import { Card } from 'react-bootstrap'

function Cards({ children }) {
    return <Card bg="light">
        <Card.Body>{children}</Card.Body>
    </Card>
}

export default Cards;
