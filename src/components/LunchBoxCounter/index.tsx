import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

interface Props {
    boxen: number;
    min?: number;
    max?: number;
    onNumberChanged: (boxen: number) => unknown;
}

export default function LunchBoxCounter({ boxen, min = 1, max = 100, onNumberChanged }: Props) {
    const increment = () => onNumberChanged(boxen < max ? boxen + 1 : max);
    const decrement = () => onNumberChanged(boxen > min ? boxen - 1 : min);
    const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        switch (event.key) {
            case 'ArrowUp':
                increment();
                break;

            case 'ArrowDown':
                decrement();
                break;

            case 'Home':
                onNumberChanged(min);
                break;

            case 'End':
                onNumberChanged(max);
                break;

            default:
                break;
        }

        event.stopPropagation();
        event.preventDefault();
    };

    return (
        <>
            <Form.Label htmlFor='spinner' className="display-5" id="spinner-label">Number of lunch&nbsp;bags</Form.Label>
            <InputGroup className="mb-3 justify-content-center launch-box" size='lg' role="spinbutton">
                <Button variant="outline-dark" size='lg' className='fw-bold' onClick={decrement} disabled={boxen <= min} aria-hidden tabIndex={-1}>
                    -
                </Button>
                <InputGroup.Text
                    id="spinner"
                    className='fw-bold text-center lb-input'
                    aria-valuemin={min}
                    aria-valuemax={max}
                    aria-valuenow={boxen}
                    tabIndex={0}
                    onKeyDown={keyDownHandler}
                >
                    {boxen}
                </InputGroup.Text>
                <Button variant="outline-dark" size='lg' className='fw-bold' onClick={increment} disabled={boxen >= max} aria-hidden tabIndex={-1}>
                    +
                </Button>
            </InputGroup>
        </>
    );
}
