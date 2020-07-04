import React from "react";
import { Form } from 'react-bootstrap'

function Input({ placeholder, type, onChange }) {
    return <Form.Group>
        <Form.Control type={type} placeholder={placeholder} onChange={onChange} />
    </Form.Group>
}

export default Input;
