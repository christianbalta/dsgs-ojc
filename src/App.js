import './index.css';
import ImageHeader from "./components/ImageHeader";
import {Col, Container, Row} from "react-bootstrap";
import Alphabet from "./components/Alphabet";
import Sentence from "./components/Sentence";


function App() {
    return (
        <Container fluid>
            <Row className="image-container justify-content-md-center">
                <Col xs="auto">
                    <ImageHeader/>
                </Col>
            </Row>
            <Row className="justify-content-md-center mt-5">
                <Col xs="auto text-center">
                    <h1>Willkommen</h1>
                    <h4>Unser Gebärdensprachen Alphabet soll dir dabei helfen, dich einfacher mit Gehörlosen zu unterhalten.</h4>
                </Col>
            </Row>
            <Row className="justify-content-md-center mt-5">
                <Col xs="auto">
                    <Alphabet/>
                </Col>
            </Row>
            <Row className="justify-content-md-center mt-5">
                <Col xs="auto">
                    <Sentence/>
                </Col>
            </Row>

        </Container>
    );
}

export default App;
