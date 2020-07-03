import React from "react";
import { ListGroup } from 'react-bootstrap'

function ListItem({ key, children }) {
    return <ListGroup.Item key={key}>{children}</ListGroup.Item>
}

export default ListItem;
