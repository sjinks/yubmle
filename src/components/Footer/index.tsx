import React from 'react';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import house from 'bootstrap-icons/icons/house-door-fill.svg';
import box from 'bootstrap-icons/icons/box-fill.svg';
import heart from 'bootstrap-icons/icons/heart-fill.svg';
import person from 'bootstrap-icons/icons/person-fill.svg';

export default function Footer() {
    return (
        <div className="fixed-bottom">
            <Row className="bg-dark text-white pt-2 pb-2">
                <Col className="text-center">
                    <Link to='/'><img src={house} alt="Home" className='fs-1' style={{ width: '1em', height: '1em' }} /></Link>
                </Col>
                <Col className="text-center">
                    { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
                    <a href="#"><img src={box} alt="???" className='fs-1' style={{ width: '1em', height: '1em' }} /></a>
                </Col>
                <Col className="text-center">
                    { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
                    <a href="#"><img src={heart} alt="Favorites" className='fs-1' style={{ width: '1em', height: '1em' }} /></a>
                </Col>
                <Col className="text-center">
                    { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
                    <a href="#"><img src={person} alt="Profile" className='fs-1' style={{ width: '1em', height: '1em' }} /></a>
                </Col>
            </Row>
        </div>
    );
}