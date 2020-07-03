import React from "react";
import { Image } from 'react-bootstrap'

function Images({ src }) {
    return <Image src={src} fluid />
}

export default Images;
