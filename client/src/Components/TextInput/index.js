import React from "react";
import { Form } from 'react-bootstrap'

function Input({ label, placeholder, type, onChange }) {
    return <Form.Group>
        <Form.Label>{label}</Form.Label>
        <Form.Control type={type} placeholder={placeholder} onChange={onChange} />
    </Form.Group>
}

export default Input;
