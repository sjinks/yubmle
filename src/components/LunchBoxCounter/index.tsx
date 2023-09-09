import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import minus from 'bootstrap-icons/icons/dash-lg.svg';
import plus from 'bootstrap-icons/icons/plus-lg.svg';

interface Props {
    boxen: number;
    onNumberChanged: (boxen: number) => unknown;
}

export default function LunchBoxCounter({ boxen, onNumberChanged }: Props) {
    const increment = () => onNumberChanged(boxen + 1);
    const decrement = () => onNumberChanged(boxen - 1);

    return (
        <>
            <p className="display-5">Number of lunch&nbsp;bags</p>
            <InputGroup className="mb-3 justify-content-center launch-box" size='lg'>
                <Button variant="outline-dark" size='lg' className='fw-bold' onClick={decrement} disabled={boxen < 2}>
                    -
                </Button>
                <InputGroup.Text className='fw-bold text-center lb-input'>{boxen}</InputGroup.Text>
                <Button variant="outline-dark" size='lg' className='fw-bold' onClick={increment}>
                    +
                </Button>
            </InputGroup>
        </>
    );
}
