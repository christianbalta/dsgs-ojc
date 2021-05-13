import React from 'react';
import {ListGroup} from "react-bootstrap";

const Sentence = () => {
    return (
        <ListGroup horizontal>
            <ListGroup.Item>Hallo</ListGroup.Item>
            <ListGroup.Item>Wie gehts?</ListGroup.Item>
            <ListGroup.Item>Mein Name ist</ListGroup.Item>
            <ListGroup.Item>Dónde está la biblioteca?</ListGroup.Item>
            <ListGroup.Item>...</ListGroup.Item>
        </ListGroup>
    );
};

export default Sentence;
