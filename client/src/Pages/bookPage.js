import React, { useState, useEffect } from "react";
import Container from "../Components/Container"
import Column from "../Components/Column"
import Image from "../Components/Image"
import Row from "../Components/Row"
import Heading from "../Components/Jumbotron"
import Title from "../Components/Title"
import GoogleBooksAPI from "../utils/GoogleBooksAPI";


function bookPage({ match }) {
    const [bookInfo, setBookInfo] = useState()

    async function retreiveInfo(id) {
        try {
            const { data: { items } } = await GoogleBooksAPI.search(id)
            setBookInfo(items[0])
            // setSaved(data)
        }
        catch (error) { console.log(error) }
    }

    useEffect(() => {
        const id = match.params.id
        retreiveInfo(id)
    }, [])

    useEffect(() => {
        console.log("DJSIO", bookInfo)
    }, bookInfo)

    return <Container>
        {bookInfo ? <>
            <Heading />
            <Title>{bookInfo.volumeInfo.title}</Title>
            <h4>{bookInfo.volumeInfo.authors === undefined ? "No authors listed" : bookInfo.volumeInfo.authors.join(", ")}</h4>
            <br />
            <Row>
                <Column size={4}>
                    <Image src={bookInfo.volumeInfo.imageLinks === undefined ? "https://voice.global/wp-content/plugins/wbb-publications/public/assets/img/placeholder.jpg" : bookInfo.volumeInfo.imageLinks.thumbnail} width={'300px'} />
                </Column>
                <Column>
                    <div>
                        {bookInfo.volumeInfo.description}
                    </div>
                    <br />
                    <div>
                        <p><b>Genre: </b> {bookInfo.volumeInfo.categories ? bookInfo.volumeInfo.categories[0] : <i>Genres unlisted</i>}</p>
                        <p><b>Published: </b>{bookInfo.volumeInfo.publisher}, {bookInfo.volumeInfo.publishedDate.substring(0, 4)}</p>
                    </div>
                </Column>
            </Row>
        </>
            : null}

    </Container>;
}

export default bookPage;