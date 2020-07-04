import React from "react";
import { Form } from 'react-bootstrap'

function Forms({ onSubmit, children }) {
    return <Form onSubmit={onSubmit}>{children}</Form>
}

export default Forms;
