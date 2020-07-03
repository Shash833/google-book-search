import React from "react";
import Container from "../Components/Container"
import Heading from "../Components/Jumbotron"
import Card from "../Components/Card"
import Title from "../Components/Title"
import List from "../Components/ListGroup"
import ListItem from "../Components/ListItem"

function SavedBooks() {
    return <Container>
        <Heading />
        <Card>
            <Title>Saved Books:</Title>
            <List>
                <ListItem></ListItem>
            </List>
        </Card>
    </Container>;
}

export default SavedBooks;
