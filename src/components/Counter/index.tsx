import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

interface CounterProps {
    value: number;
    min?: number;
    max?: number;
    onValueChanged: (value: number) => unknown;
}


export default function Counter({ min = 0, max = 100, value, onValueChanged }: CounterProps) {
    const increment = () => onValueChanged(value < max ? value + 1 : max);
    const decrement = () => onValueChanged(value > min ? value - 1 : min);
    const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        switch (event.key) {
            case 'ArrowUp':
                increment();
                break;

            case 'ArrowDown':
                decrement();
                break;

            case 'Home':
                onValueChanged(min);
                break;

            case 'End':
                onValueChanged(max);
                break;

            default:
                break;
        }

        event.stopPropagation();
        event.preventDefault();
    };

    return (
        <InputGroup className="mb-3 justify-content-center launch-box" size='lg' role="spinbutton">
            <Button variant="outline-dark" size='lg' className='fw-bold' onClick={decrement} disabled={value <= min} aria-hidden tabIndex={-1}>
                -
            </Button>
            <InputGroup.Text
                className='fw-bold text-center lb-input'
                aria-valuemin={min}
                aria-valuemax={max}
                aria-valuenow={value}
                tabIndex={0}
                onKeyDown={keyDownHandler}
            >
                {value}
            </InputGroup.Text>
            <Button variant="outline-dark" size='lg' className='fw-bold' onClick={increment} disabled={value >= max} aria-hidden tabIndex={-1}>
                +
            </Button>
        </InputGroup>
    );
}