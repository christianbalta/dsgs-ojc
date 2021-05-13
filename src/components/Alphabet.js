import React from 'react';
import {ListGroup, Row} from "react-bootstrap";

const Alphabet = () => {
    return (
        <ListGroup horizontal>
            <ListGroup.Item>A</ListGroup.Item>
            <ListGroup.Item>B</ListGroup.Item>
            <ListGroup.Item>C</ListGroup.Item>
            <ListGroup.Item>D</ListGroup.Item>
            <ListGroup.Item>E</ListGroup.Item>
            <ListGroup.Item>...</ListGroup.Item>
        </ListGroup>
    );
};

export default Alphabet;
