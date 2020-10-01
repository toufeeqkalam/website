import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './images/logo.png'

import {Col, Container, Navbar, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faFreeCodeCamp,
    faGithub,
    faLinkedin,
    faStackOverflow,
    faTwitter
} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope,} from "@fortawesome/free-regular-svg-icons";
import {faPencilAlt} from "@fortawesome/free-solid-svg-icons";

function getYear() {
    return new Date().getFullYear();
}

function App() {
    return (
        <div className="root">
            <Navbar bg="light">
                <Navbar.Brand href="http://toufeeqkalam.co.za">
                    <img
                        alt="..."
                        src={logo}
                        width="35"
                        height="35"
                        className="d-inline-block align-top"
                    />{' '}
                    | toufeeqkalam.
                </Navbar.Brand>
            </Navbar>
            <Container>
                <Row>
                    <Col>
                        <img className="avatar" src={"https://avatars3.githubusercontent.com/u/19366661?v=4"}
                             alt="..."/>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Container>
                        <Row>
                            <Col>
                                <h3>software engineer.</h3>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col>
                                <hr className="divider"/>
                                <span className="icons">
                            <a href="https://github.com/toufeeqkalam">
                                <FontAwesomeIcon icon={faGithub} style={{color: "#24292e"}} size="2x"/>
                            </a>
                        </span>
                                <span className="icons">
                            <a href="https://www.freecodecamp.org/toufeeqkalam">
                                <FontAwesomeIcon icon={faFreeCodeCamp} style={{color: "#006400"}} size="2x"/>
                            </a>
                        </span>
                                <span className="icons">
                            <a href="https://www.facebook.com/toufeeq.kalam.9">
                                <FontAwesomeIcon icon={faFacebook} style={{color: "#4267B2"}} size="2x"/>
                            </a>
                        </span>
                                <span className="icons">
                            <a href="https://twitter.com/ToufeeqKalam">
                                <FontAwesomeIcon icon={faTwitter} style={{color: "#1DA1F2"}} size="2x"/>
                            </a>
                        </span>
                                <span className="icons">
                            <a href="https://stackoverflow.com/users/9337697/toufeeq-kalam">
                                <FontAwesomeIcon icon={faStackOverflow} style={{color: "#F48024"}} size="2x"/>
                            </a>
                        </span>
                                <hr className="divider"/>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <p className="info-text"><span>&#42;</span> To view the projects I have worked on and currently
                            working on, check <a
                                href="https://github.com/toufeeqkalam"><kbd
                                style={{backgroundColor: "#24292e"}}><FontAwesomeIcon icon={faGithub}/>{" "}GitHub</kbd></a>
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <p className="info-text"><span>&#42;</span> Follow me on my greatest learnings in the world of
                            tech, see <a
                                href="http://www.toufeeqkalam.co.za/blog/"><kbd
                                style={{backgroundColor: "#6495ED"}}><FontAwesomeIcon
                                icon={faPencilAlt}/>{" "}Blog</kbd></a></p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <p className="info-text"><span>&#42;</span> Take a look at my awesome professional career,
                            see <a
                                href="https://www.linkedin.com/in/toufeeq-kalam-238975a3/"><kbd
                                style={{backgroundColor: "#0e76a8"}}><FontAwesomeIcon
                                icon={faLinkedin}/>{" "}LinkedIn</kbd></a>
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <p className="info-text"><span>&#42;</span> Get in touch, feel free to <a
                            href="http://toufeeqkalam.co.za/blog/contact-me/"><kbd style={{backgroundColor: "#20B2AA"}}><FontAwesomeIcon
                            icon={faEnvelope}/>{" "}email me</kbd></a>
                        </p>
                        <hr className="divider"/>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <p className="info-text"><a href="https://github.com/toufeeqkalam"><kbd
                        style={{backgroundColor: "#d73a49"}}><FontAwesomeIcon icon={faGithub}/>{" "}Fork me on
                        GitHub</kbd></a>
                    </p>
                </Row>
            </Container>
            <Container>
                <Row>
                    <footer className="footer">
                        &copy; Copyright {getYear()} {""}
                        <a href="http://toufeeqkalam.co.za">Toufeeq Kalam</a>
                    </footer>
                </Row>
            </Container>
        </div>
    );
}

export default App;
