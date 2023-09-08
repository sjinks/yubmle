import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import basket from 'bootstrap-icons/icons/basket.svg';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <Nav className='bg-light fixed-top'>
            <Container fluid className="d-flex">
                <Link to='/' className='fs-1 navbar-brand'>YUMBLE</Link>
                <Nav className="ms-auto justify-content-end" as="nav">
                    <Link to='/basket' className='nav-link'><img src={basket} alt="Basket" className='fs-1' style={{ width: '1em', height: '1em' }} /></Link>
                </Nav>
            </Container>
        </Nav>
    );
}