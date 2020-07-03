import React, { useState, useEffect } from "react";
import Container from "../Components/Container"
import Heading from "../Components/Jumbotron"
import Card from "../Components/Card"
import Title from "../Components/Title"
import Form from "../Components/Form"
import Input from "../Components/TextInput"
import Button from "../Components/Button"
import List from "../Components/ListGroup"
import ListItem from "../Components/ListItem"
import API from "../utils/API";


function BookSearch() {
    //Set state for search input
    const [search, setSearch] = useState("")

    //Set state for search results from Google Books API
    const [searchResults, setSearchResults] = useState([])

    //When user searches for a book, make API call and set results into 'searchResults' state
    const handleInput = async () => {
        try {
            const { data: { items } } = await API.search(search)
            if (items.length > 0) {
                setSearchResults(items)
            }
        }
        catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        console.log("state", searchResults)
    }, [searchResults]);


    return <Container>
        <Heading />
        <Card>
            <Title>Book Search</Title>
            <Form>
                <Input label={"Book:"} placeholder={"Enter the book you want to search"} onChange={e => setSearch(e.target.value)} />
                <Button variant={"dark"} type={"submit"} onClick={handleInput}>Search</Button>
            </Form>
        </Card>
        {searchResults.length > 1 ?
            <Card>
                <Title>Search Results for "{search}":</Title>
                <List>
                    {searchResults.map(({ id, volumeInfo: { title, authors, description, imageLinks } }) => (
                        <ListItem key={id}
                            title={title}
                            author={authors}
                            blurb={description}
                            image={imageLinks === undefined ? "https://voice.global/wp-content/plugins/wbb-publications/public/assets/img/placeholder.jpg" : imageLinks.thumbnail} />
                    ))}
                </List>
            </Card>
            : false}

    </Container>;
}

export default BookSearch;
