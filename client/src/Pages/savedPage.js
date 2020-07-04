import React, { useState, useEffect } from "react";
import Container from "../Components/Container"
import Column from "../Components/Column"
import Image from "../Components/Image"
import Row from "../Components/Row"
import Heading from "../Components/Jumbotron"
import Title from "../Components/Title"
import Button from "../Components/Button"
import List from "../Components/ListGroup"
import ListItem from "../Components/ListItem"
import BooksDB from "../utils/DB"

function SavedBooks() {
    //To set saved books
    const [savedBooks, setSaved] = useState([])

    // Load all books from DB when page renders
    useEffect(() => {
        loadBooks()
    }, [])

    // Load books from DB and set them to 'savedBooks' state
    async function loadBooks() {
        try {
            const { data } = await BooksDB.getBooks()
            setSaved(data)
        }
        catch (error) { console.log(error) }
    };

    //Delete book with unique ID from DB and reset state
    async function deleteBook(id) {
        try {
            await BooksDB.deleteBook(id)
            loadBooks()
        }
        catch (error) { console.log(error) }
    }

    return <Container>
        <Heading />
        {savedBooks.length ? <Title>Saved Books:</Title> : <Title>Save books to view them on this page!</Title>}
        <List>
            {savedBooks.map(({ _id, title, author, description, image, link }) => (
                <ListItem key={_id}>
                    <Row>
                        <Column size={10}>
                            <h3>{title}</h3>
                            <h4>{author.join(", ")}</h4>
                        </Column>
                        <Column size={2}>
                            <Button variant={"secondary"} onClick={() => deleteBook(_id)}>Delete Book</Button>
                        </Column>
                    </Row>
                    <Row>
                        <Column size={2}>
                            <Image src={image === undefined ? "https://voice.global/wp-content/plugins/wbb-publications/public/assets/img/placeholder.jpg" : image} />
                        </Column>
                        <Column size={10}>
                            <p>{description}</p>
                            <p><b>Link: </b><a href={link}>{link}</a></p>
                        </Column>
                    </Row>
                </ListItem>
            ))}
        </List>
    </Container>;
}

export default SavedBooks;
