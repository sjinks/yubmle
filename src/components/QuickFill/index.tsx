import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import { AppContext, ApplicationContext } from '../../context';
import { Link } from 'react-router-dom';

const selections: number[][] = [
    [],
    [2, 14, 20, 27],
    [6, 16, 22, 27],
];

interface DropdownButtonProps {
    selection: number;
}

function DropdownButton({ selection }: DropdownButtonProps) {
    const [show, setShow] = useState<boolean | null>(null);
    const ctx = useContext(AppContext) as ApplicationContext;
    const groups = Object.keys(ctx.items.items);
    const arr = new Array(ctx.boxen).fill(0);

    const quickFill = (box: number, selection: number) => {
        groups.forEach((group, index) => {
            ctx.updateBasket(box, group, selections[selection][index]);
        });
    };

    const onButtonClicked = (event: React.MouseEvent<HTMLButtonElement>) => {
        const target = event.target as HTMLButtonElement;
        const form = target.closest('form') as HTMLFormElement;
        const data = new FormData(form);
        const selection = +(target.dataset.selection as string);
        data.getAll('box').forEach((box) => {
            quickFill(+box, selection);
        });
        
        form.reset();
        setShow(() => false);
    };

    const toggle = () => setShow((show) => !show);

    return (
        <Dropdown show={show ?? undefined}>
            <Dropdown.Toggle variant="success" id="dropdown-basic" onClick={toggle}>
                Select
            </Dropdown.Toggle>

            <Dropdown.Menu as='form' className='p-4'>
                <div className='mb-3'>
                    {arr.map((_, i) => (
                        <Form.Check type='checkbox' key={i} value={i} label={`Box ${i+1}`} name='box' defaultChecked={false} />
                    ))}
                </div>
                <Button variant='success' data-selection={1} onClick={onButtonClicked} size='sm'>Apply</Button>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default function QuickFill() {
    return (
        <main className="d-flex flex-column">
            <h2 className='text-primary text-center fw-bolder mb-3'>⚡ Quick Fill ⚡</h2>

            <section className='mb-3'>
                <header className='text-white bg-primary fw-bolder text-center mb-3 p-1 h-3'>Your Favorites</header>

                <p>Nothing here yet</p>
            </section>

            <section className='mb-3'>
                <header className='text-white bg-danger fw-bolder text-center mb-3 p-1 h-3'>Ready to Go</header>

                <section className='mb-4'>
                    <Row className='text-primary fw-bolder mb-2' as='h4'>
                        <Col xs={8}>Pepperoni &amp; Cheese Pizza</Col>
                        <Col xs={4} className='text-end'>
                            <DropdownButton selection={1} />
                        </Col>
                    </Row>
                    <ListGroup as='ul' className='mb-3'>
                        <ListGroup.Item as='li'>Pepperoni Pizza</ListGroup.Item>
                        <ListGroup.Item as='li'>Freeze Dried Strawberries</ListGroup.Item>
                        <ListGroup.Item as='li'>Dill Pickle Petites</ListGroup.Item>
                        <ListGroup.Item as='li'>Larabar Chocolate Brownie</ListGroup.Item>
                    </ListGroup>
                </section>

                <section className='mb-4'>
                    <h4 className='text-primary fw-bolder row mb-2'>
                        <Col xs={8}>PB&amp;J Stuff'd Oat Bar</Col>
                        <Col xs={4} className='text-end'>
                            <DropdownButton selection={2} />
                        </Col>
                    </h4>
                    <ListGroup as='ul' className='mb-3'>
                        <ListGroup.Item as='li'>PB &amp; Berry Jam Stuffed Oat Bar</ListGroup.Item>
                        <ListGroup.Item as='li'>Sour Blue Raspberry Raisins</ListGroup.Item>
                        <ListGroup.Item as='li'>Veggie Straws</ListGroup.Item>
                        <ListGroup.Item as='li'>Larabar Chocolate Brownie</ListGroup.Item>
                    </ListGroup>
                </section>
            </section>

            <Button variant='primary' size='lg' className='align-self-center'><Link to='/menu' className='text-white text-decoration-none'>Back to Menu</Link></Button>
        </main>
    );
}
