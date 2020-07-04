import React from "react";
import { Button } from 'react-bootstrap'
import "./style.css"

function Buttons({ variant, onClick, children, href }) {
    return <Button variant={variant} onClick={onClick} href={href}>{children}</Button>
}

export default Buttons;
