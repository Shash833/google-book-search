import React, { useState } from "react";
import Container from "../Components/Container"
import Form from "../Components/Form"
import Input from "../Components/TextInput"
import Button from "../Components/Button"
import DB from "../utils/DB"

function login({ history }) {
    //State for username
    const [user, setUser] = useState()
    //State for password
    const [password, setPassword] = useState()

    //Function to handle user login
    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            //To post login details to 'login' API route
            await DB.login({
                username: user,
                password: password
            })
            //To open homepage after successful login
            history.push("/")
        }
        catch (e) { console.log(e) }
    }

    return <Container>
        <h2>Login:</h2>
        <Form onSubmit={e => handleLogin(e)}>
            <Input placeholder={"Username"} onChange={e => setUser(e.target.value)} />
            <Input placeholder={"Password"} onChange={e => setPassword(e.target.value)} />
            <Button variant={"dark"} type={"submit"} onClick={handleLogin}>Login</Button>
        </Form>
    </Container>;
}

export default login;