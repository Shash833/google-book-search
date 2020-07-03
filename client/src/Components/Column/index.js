import React from "react";
import { Col } from 'react-bootstrap'

function Column({ size, children }) {
    return <Col md={size}>
        {children}
    </Col>
}

export default Column;
