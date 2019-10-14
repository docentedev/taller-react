import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem, Button } from 'reactstrap';

import { NavLink as RRNavLink } from 'react-router-dom';

import './Footer.css';
import logoPng from './imgs/logo.png';

const Footer = () => {
    return (
        <footer className="footer pt-4">
            <Container>
                <Row>
                    <Col md="1">
                        <img src={logoPng} alt="React" className="img-fluid" />
                    </Col>
                    <Col md="7">
                        <ListGroup flush className="footer__list text-left">
                            <ListGroupItem tag={RRNavLink} exact to="/">Home</ListGroupItem>
                            <ListGroupItem tag={RRNavLink} exact to="login" activeClassName="active">Login</ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col md="4" className="text-right">
                        <Button size="lg" color="success">Iniciar Sesión</Button>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;