import React, {useEffect, useState} from 'react';
import {ListGroup} from "react-bootstrap";
import axios from "axios";

const Sentence = () => {
    const [sentences, setSentences] = useState([]);
    const [video, setVideo] = useState('https://firebasestorage.googleapis.com/v0/b/dsgs-ojc.appspot.com/o/hallo2.mp4?alt=media&token=ef058362-2a1f-4ad4-8437-1935dc78f1b6');

    useEffect(function () {
        async function getSentence() {
            try {
                const response = await axios.get("/api/sentences");
                setSentences(response.data);
            } catch (error) {
                console.log('error', error);
            }
        }

        getSentence();
    }, []);

    const getVideo = (videoUrl) => {
        setVideo(videoUrl)
    }

    return (
        <>
            <ListGroup horizontal>
                {
                    sentences.map((sentence) => {
                        return (
                            <div key={sentence._id}>
                                <ListGroup.Item
                                    onClick={() => getVideo(sentence.videoUrl)}
                                    className="letter">{sentence.sentence}</ListGroup.Item>
                            </div>
                        )
                    })
                }
            </ListGroup>
            <div className="text-center mt-5 mb-5">
                <video src={video} controls className="video">
                    no video
                </video>
            </div>
        </>
    );
};

export default Sentence;
