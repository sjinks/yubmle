import React from 'react';
import Alert from 'react-bootstrap/Alert';
import LunchBoxCounter from '../LunchBoxCounter';
import { Link } from 'react-router-dom';

interface Props {
    boxen: number;
    onNumberChanged: (boxen: number) => void;
}

export default function Home({ boxen, onNumberChanged }: Props) {
    return (
        <main className="d-flex flex-column justify-content-center">
            <Alert variant='primary'>
                <p className='m-0 fs-1 fw-bold text-center'>Free Shipping for 7+ Lunches</p>
            </Alert>
            <div className='m-auto text-center'>
                <LunchBoxCounter boxen={boxen} onNumberChanged={onNumberChanged} />
                <Link to='/menu' className='fw-bold fs-1 btn btn-success'>Let's Go!</Link>
            </div>
        </main>
    );
}
