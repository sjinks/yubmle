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
            <p className="display-4">Number of lunch bags</p>
            <InputGroup className="mb-3 justify-content-center" size='lg'>
                <Button variant="outline-dark" size='lg' className='fw-bold' onClick={decrement} disabled={boxen < 2}>
                    <Image src={minus} alt="-" />
                </Button>
                <InputGroup.Text className='fw-bold text-center'>{boxen}</InputGroup.Text>
                <Button variant="outline-dark" size='lg' className='fw-bold' onClick={increment}>
                    <Image src={plus} alt="+" />
                </Button>
            </InputGroup>
        </>
    );
}
