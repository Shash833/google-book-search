import React from "react";
import { ListGroup } from 'react-bootstrap'
import "./style.css"

function List({ children }) {
    return <ListGroup>{children}</ListGroup>
}

export default List;
