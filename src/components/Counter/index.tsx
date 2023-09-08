import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import minus from 'bootstrap-icons/icons/dash-lg.svg';
import plus from 'bootstrap-icons/icons/plus-lg.svg';

interface CounterProps {
    value: number;
    onValueChanged: (value: number) => unknown;
}


export default function Counter({ value, onValueChanged }: CounterProps) {
    const increment = () => onValueChanged(value + 1);
    const decrement = () => onValueChanged(value - 1);

    return (
        <InputGroup className="mb-3 justify-content-center">
            <Button variant="outline-dark" className='fw-bold' onClick={decrement} disabled={value < 1}>
                <Image src={minus} alt="-" />
            </Button>
            <InputGroup.Text className='fw-bold text-center'>{value}</InputGroup.Text>
            <Button variant="outline-dark" className='fw-bold' onClick={increment}>
                <Image src={plus} alt="+" />
            </Button>
        </InputGroup>
    );
}