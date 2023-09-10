import React from 'react';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import home from '../../images/icon-home.png';
import bag from '../../images/bag.png';
import heart from '../../images/icon-heart.png';
import person from '../../images/icon-person.png';

export default function Footer() {
    return (
        <div className="fixed-bottom ">
            <Row className="bg-black text-white text-center yumble-footer py-3">
                <Col>
                    <Link to='/'>
                        <Image src={home} alt="Home" className='fs-1' />
                    </Link>
                </Col>
                <Col>
                    { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
                    <a href="#">
                        <Image src={bag} alt="???" className='fs-1' />
                    </a>
                </Col>
                <Col>
                    { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
                    <a href="#">
                        <Image src={heart} alt="Favorites" className='fs-1' />
                    </a>
                </Col>
                <Col>
                    { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
                    <a href="#">
                        <Image src={person} alt="Profile" className='fs-1' />
                    </a>
                </Col>
            </Row>
        </div>
    );
}