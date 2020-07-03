import React from "react";
import Container from "../Components/Container"
import Heading from "../Components/Jumbotron"
import Card from "../Components/Card"
import Title from "../Components/Title"
import Form from "../Components/Form"
import Input from "../Components/TextInput"
import Button from "../Components/Button"
import List from "../Components/ListGroup"
import ListItem from "../Components/ListItem"


function BookSearch() {
    return <Container>
        <Heading />
        <Card>
            <Title>Book Search</Title>
            <Form>
                <Input label={"Book:"} placeholder={"Enter the book you want to search"} />
                <Button variant={"dark"} type={"submit"}>Search</Button>
            </Form>
        </Card>
        <Card>
            <Title>Results:</Title>
            <List>
                <ListItem></ListItem>
            </List>
        </Card>
    </Container>;
}

export default BookSearch;
