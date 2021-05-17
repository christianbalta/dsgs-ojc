import React, {useEffect, useState} from 'react';
import {Image, ListGroup} from "react-bootstrap";
import axios from "axios";

const Alphabet = () => {
    const [letters, setLetters] = useState([]);
    const [image, setImage] = useState('https://firebasestorage.googleapis.com/v0/b/dsgs-ojc.appspot.com/o/A.jpg?alt=media&token=806df21d-4a6c-428d-abd7-7039731d160c');

    useEffect(function () {
        async function getLetters() {
            try {
                const response = await axios.get("https://dsgs-ojc.herokuapp.com/api/letters");
                setLetters(response.data);
            } catch (error) {
                console.log('error', error);
            }
        }

        getLetters();
    }, []);

    const getImage = (imageUrl) => {
        setImage(imageUrl)
    }

    return (
        <div>
            <ListGroup horizontal>
                {
                    letters.map((letter) => {
                        return (
                            <ListGroup.Item
                                key={letter._id}
                                onClick={() => getImage(letter.imageUrl)}
                                className="letter">{letter.letter}
                            </ListGroup.Item>
                        )
                    })
                }
            </ListGroup>
            <div className="text-center">
                <Image src={image} fluid className="mt-5 image"/>
            </div>
        </div>
    );
};

export default Alphabet;
