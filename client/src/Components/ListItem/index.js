import React from "react";
import { ListGroup } from 'react-bootstrap'
import Column from "../Column"
import Image from "../Image"
import Row from "../Row"

function ListItem({ title, author, blurb, image }) {
    return <ListGroup.Item>
        <Row>
            <Column size={10}>
                <h3>{title}</h3>
                <h4>{author}</h4>
            </Column>
        </Row>
        <Row>
            <Column size={2}>
                <Image src={image} />
            </Column>
            <Column size={10}>
                <p>{blurb}</p>
            </Column>
        </Row>
    </ListGroup.Item>
}

export default ListItem;
