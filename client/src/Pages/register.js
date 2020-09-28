import React, { useState, useContext } from "react";
import Container from "../Components/Container"
import Form from "../Components/Form"
import Input from "../Components/TextInput"
import Button from "../Components/Button"
import DB from "../utils/DB"
import { UserContext } from "../Context/userContext";

function Register({ history }) {
    //State for username
    const [username, setUsername] = useState()
    //State for password
    const [password, setPassword] = useState()
    //State for name
    const [name, setName] = useState()

    //Context to set state for logged in user details:
    const { setUser } = useContext(UserContext)

    //Function to handle submission of registration information:
    const handleRegister = async (event) => {
        event.preventDefault()
        try {
            //To post registration information to 'register' API route
            await DB.register({
                name: name,
                username: username,
                password: password
            })
            //After registration information has been submitted, new user can be logged in:
            const { data } = await DB.login({
                username: username,
                password: password
            })
            //Set user context
            await setUser(data)
            //Open homepage after user has been logged in
            history.push("/")
        }
        catch (e) { console.log(e) }
    }

    return <Container>
        <div>Register:</div>
        <Form onSubmit={e => handleRegister(e)}>
            <Input placeholder={"Full Name"} onChange={e => setName(e.target.value)} />
            <Input placeholder={"Username"} onChange={e => setUsername(e.target.value)} />
            <Input placeholder={"Password"} onChange={e => setPassword(e.target.value)} />
            <Button variant={"dark"} type={"submit"} onClick={handleRegister}>Login</Button>
        </Form>
    </Container>;
}

export default Register;