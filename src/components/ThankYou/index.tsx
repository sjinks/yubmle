import React from 'react';
import Alert from 'react-bootstrap/Alert';

export default function ThankYou() {
    return (
        <main className="d-flex flex-column justify-content-center">
            <Alert variant='success'>
                <p className='m-0 fs-1 fw-bold text-center'>Thank You!</p>
            </Alert>
        </main>
    );
}
