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
        <div className="fixed-bottom ">
            <Row className="bg-black text-white yumble-footer">
                <Col className="text-center">
                    <Link to='/'><img src='images/icon-home.png' alt="Home" className='fs-1' style={{ width: '1em', height: '1em' }} /></Link>
                </Col>
                <Col className="text-center">
                    { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
                    <a href="#"><img src='images/bag.png' alt="???" className='fs-1' style={{ width: '1em', height: '1em' }} /></a>
                </Col>
                <Col className="text-center">
                    { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
                    <a href="#"><img src='images/icon-heart.png' alt="Favorites" className='fs-1' style={{ width: '1em', height: '1em' }} /></a>
                </Col>
                <Col className="text-center">
                    { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
                    <a href="#"><img src='images/icon-person.png' alt="Profile" className='fs-1' style={{ width: '1em', height: '1em' }} /></a>
                </Col>
            </Row>
        </div>
    );
}