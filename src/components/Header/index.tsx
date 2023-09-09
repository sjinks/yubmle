import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import basket from 'bootstrap-icons/icons/basket.svg';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Header() {
    return (
        <Nav className='bg-white yumble-header'>
            <Container fluid className="d-flex">
                <Row>
                    <Col xs={9}>
                        <Link to='/'><img src='images/logo-full.svg' className={'img-fluid'} /></Link>
                    </Col>
                    <Col className={'card-col'}>
                            <Link to='/basket' className='header-cart d-block ms-auto'><img src='images/cart.svg' alt="Cart" className='img-fluid ds-block ms-auto'  /></Link>
                    </Col>

                </Row>
            </Container>
        </Nav>
    );
}