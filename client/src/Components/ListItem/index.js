import React from "react";
import { ListGroup } from 'react-bootstrap'

function ListItem({ children }) {
    return <ListGroup.Item>
        {children}
    </ListGroup.Item>
}

export default ListItem;
