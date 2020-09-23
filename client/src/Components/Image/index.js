import React from "react";
import { Image } from 'react-bootstrap'

function Images({ src, width }) {
    return <Image src={src} fluid width={width} />
}

export default Images;
