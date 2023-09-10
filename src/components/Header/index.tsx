import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import logo from '../../images/logo-full.svg';
import cart from '../../images/cart.svg';

export default function Header() {
    return (
        <Nav className='bg-white py-3 yumble-header'>
            <Container fluid>
                <Row>
                    <Col xs={9}>
                        <Link to='/'>
                            <Image src={logo} alt="Yumble" fluid />
                        </Link>
                    </Col>
                    <Col className="card-col text-end" xs={3}>
                        <Link to="/basket" className="header-cart d-inline-block">
                            <Image src={cart} alt="Cart" fluid />
                        </Link>
                    </Col>
                </Row>
            </Container>
        </Nav>
    );
}