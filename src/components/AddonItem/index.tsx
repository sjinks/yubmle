import React from 'react';
import { Addon, ApplicationContext } from '../../context';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Counter from '../Counter';
import AddonImage from '../AddonImage';

export interface AddonProps {
    addon: Addon;
    count: number;
    updateAddon: ApplicationContext['updateAddon'];
}

export default function AddonItem({ addon, count, updateAddon }: AddonProps) {
    const onValueChanged = (value: number) => {
        updateAddon(addon.id, value);
    };

    return (
        <>
            <Row className='mb-2'>
                <Col>
                    <h4 className='fw-bold'>{addon.name}</h4>
                </Col>
            </Row>
            <Row className='mb-3 align-items-center'>
                <Col xs={3} md={3} lg={1}>
                    <AddonImage id={addon.id} alt={addon.name} />
                </Col>
                <Col xs={4} sm={5} md={6} lg={8}>{addon.description}</Col>
                <Col xs={5} sm={4} md={3}>
                    <Counter value={count} onValueChanged={onValueChanged} />
                </Col>
            </Row>
        </>
    );
}
