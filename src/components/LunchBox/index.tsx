import React, { useContext } from 'react';
import { AppContext, ApplicationContext } from '../../context';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

export interface BoxProps {
    box: number;
    items: Record<number, string>;
}

export default function LunchBox({ box, items }: BoxProps) {
    const ctx = useContext(AppContext) as ApplicationContext;

    return (
        <>
            <h3 className='text-primary fw-bolder clearfix mb-3'>
                Bag {box+1}
                <Badge bg='success' pill className='float-end'><Link to='/menu' className='text-white text-decoration-none'>Modify</Link></Badge>
            </h3>
            <ListGroup as='ul' className='mb-3'>
                {
                    Object.values(ctx.basket[box] ?? {}).map((id) => (
                        <ListGroup.Item key={id} as='li'>
                            - {items[+id]}
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>
        </>
    );
}
