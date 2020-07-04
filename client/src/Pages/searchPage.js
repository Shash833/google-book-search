import React, { useState } from "react";
import Container from "../Components/Container"
import Column from "../Components/Column"
import Image from "../Components/Image"
import Row from "../Components/Row"
import Heading from "../Components/Jumbotron"
import Card from "../Components/Card"
import Title from "../Components/Title"
import Form from "../Components/Form"
import Input from "../Components/TextInput"
import Button from "../Components/Button"
import List from "../Components/ListGroup"
import ListItem from "../Components/ListItem"
import GoogleBooksAPI from "../utils/GoogleBooksAPI";
import BooksDB from "../utils/DB"


function BookSearch() {
    //Set state for search input
    const [search, setSearch] = useState("")

    //Set state for search results from Google Books API
    const [searchResults, setSearchResults] = useState([])

    //When user searches for a book, make API call and set results into 'searchResults' state
    const handleInput = async (event) => {
        try {
            event.preventDefault()
            const { data: { items } } = await GoogleBooksAPI.search(search)
            if (items.length > 0) {
                setSearchResults(items)
            }
        }
        catch (error) {
            console.log(error)
        }
    };

    //Save chosen book info to DB
    async function saveBook({ title, author, description, image, link }) {
        try {
            BooksDB.saveBook({
                title: title,
                author: author,
                description: description,
                image: image,
                link: link
            })
        }
        catch (error) {
            console.log(error)
        }
    }

    return <Container>
        <Heading />
        <Card>
            <Title>Book Search:</Title>
            <Form onSubmit={e => handleInput(e)}>
                <Input placeholder={"Enter the book you want to search for"} onChange={e => setSearch(e.target.value)} />
                <Button variant={"dark"} type={"submit"} onClick={handleInput}>Search</Button>
            </Form>
        </Card>
        {searchResults.length ? <Title>Search Results:</Title> : false}
        <List>
            {searchResults.map(({ id, volumeInfo: { title, authors, infoLink, description, imageLinks } }) => (
                <ListItem key={id}>
                    <Row>
                        <Column size={10}>
                            <h3>{title}</h3>
                            <h4>{authors === undefined ? "No authors listed" : authors.join(", ")}</h4>
                        </Column>
                        <Column size={2}>
                            <Button variant={"secondary"} onClick={() => saveBook({ title: title, author: (authors === undefined ? ["No authors listed"] : authors), description: (description === undefined ? "No summary provided" : description), image: (imageLinks === undefined ? "https://voice.global/wp-content/plugins/wbb-publications/public/assets/img/placeholder.jpg" : imageLinks.thumbnail), link: infoLink })}>Save Book</Button>
                        </Column>
                    </Row>
                    <Row>
                        <Column size={2}>
                            <Image src={imageLinks === undefined ? "https://voice.global/wp-content/plugins/wbb-publications/public/assets/img/placeholder.jpg" : imageLinks.thumbnail} />
                        </Column>
                        <Column size={10}>
                            <p>{description}</p>
                            <p><b>Link: </b><a href={infoLink}>{infoLink}</a></p>
                        </Column>
                    </Row>
                </ListItem>
            ))}
        </List>

    </Container>;
}

export default BookSearch;
