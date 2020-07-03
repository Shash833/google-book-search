import React from "react";
import { Button } from 'react-bootstrap'

function Buttons({ variant, type, children, href }) {
    return <Button variant={variant} type={type} href={href}>{children}</Button>
}

export default Buttons;
