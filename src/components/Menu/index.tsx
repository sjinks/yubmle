import React, { MouseEvent, Fragment, useContext } from 'react';
import { AppContext, ApplicationContext, Items } from '../../context';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

interface TableHeaderProps {
    boxen: number;
}

function TableHeader({ boxen }: TableHeaderProps) {
    const ctx = useContext(AppContext) as ApplicationContext;
    const groups = Object.keys(ctx.items.items);
    const counts: Record<string, number> = {};

    groups.forEach((key) => {
        counts[key] = ctx.items.items[key].length;
    });

    const onButtonClcikHandler = (event: MouseEvent<HTMLButtonElement>) => {
        const target = event.target as HTMLButtonElement;
        const box = +(target.dataset.box as string);

        groups.forEach((group) => {
            const item = Math.floor(Math.random() * counts[group]);
            ctx.updateBasket(box, group, ctx.items.items[group][item].id);
        });
    };

    const arr = new Array(boxen).fill(0);
    return (
        <>
            {arr.map((_, i) => (
                    <th key={i} scope='col' className='sticky-top' style={{ zIndex: 1 }}>
                        Bag&nbsp;{i+1}
                        <br/>
                        <Button variant='link' className='text-decoration-none' onClick={onButtonClcikHandler} data-box={i} aria-label={`Populate bag ${i+1} randomly`}>⚡</Button>
                    </th>
                )
            )}
        </>
    );
}

interface CheckboxProps {
    box: number;
    group: string
    item: number;
    itemName: string;
    basket: ApplicationContext['basket'];
    updateBasket: ApplicationContext['updateBasket'];
}

function Checkbox({ basket, box, group, item, itemName, updateBasket }: CheckboxProps) {
    const handleCheckboxClick = (event: MouseEvent<HTMLInputElement>) => {
        if (event.target) {
            let { value } = event.target as HTMLInputElement;
            if (basket[box]?.[group] === +value) {
                value = '0';
            }

            updateBasket(box, group, +value);
        }
    };

    const handleCheckboxChange = () => {};

    return (
        <Form.Check
            className="yumbleCheck fs-1 fw-bold text-center"
            type="radio"
            checked={basket[box]?.[group] === item}
            name={`${group}_${box}`}
            value={item}
            onClick={handleCheckboxClick}
            onChange={handleCheckboxChange}
            aria-label={`${itemName}, bag ${box+1}`}
        />
    );
}

interface SectionProps {
    boxen: number;
    group: string;
    items: ApplicationContext['items']['items'][''];
    basket: ApplicationContext['basket'];
    updateBasket: ApplicationContext['updateBasket'];
}

function Section({ basket, boxen, group, items, updateBasket }: SectionProps) {
    const arr = new Array(boxen).fill(0);
    return (
        <>
            {items.map((item) => {
                return (
                    <tr key={item.id}>
                        <th scope='row' className='position-sticky start-0'>{item.name}</th>
                        {arr.map((_, i) => <td key={i}><Checkbox basket={basket} box={i} group={group} item={item.id} itemName={item.name} updateBasket={updateBasket} /></td>)}
                    </tr>
                );
            })}
        </>
    )
}

interface TableItemsProps {
    boxen: number;
    items: Items['items'];
    basket: ApplicationContext['basket'];
    updateBasket: ApplicationContext['updateBasket'];
}

function TableItems({ basket, boxen, items, updateBasket }: TableItemsProps) {
    return (
        <>
            {
                Object.keys(items).map((key) => {
                    return (
                        <Fragment key={key}>
                            <tr>
                                <td colSpan={boxen+1} className="text-center fs-3 fw-bolder blue-bg position-relative">
                                    <div className='position-sticky start-0' style={{ maxWidth: '100vw' }}>{key}</div>
                                </td>
                            </tr>
                            <Section boxen={boxen} items={items[key]} basket={basket} group={key} updateBasket={updateBasket} />
                        </Fragment>
                    );
                })
            }
        </>
    );
}

export default function Menu() {
    const ctx = useContext(AppContext) as ApplicationContext;
    return (
        <main className="d-flex flex-column justify-content-center mb-3" style={{ height: '100%' }}>
            <Table responsive>
                <thead className="text-center">
                    <tr>
                        <td className='text-start sticky-top' style={{ zIndex: 1 }}>
                            <Link to='/quick-fill'>Quick Fill</Link>
                        </td>
                        <TableHeader boxen={ctx.boxen} />
                    </tr>
                </thead>
                <tbody className='align-middle'>
                    <TableItems boxen={ctx.boxen} items={ctx.items.items} basket={ctx.basket} updateBasket={ctx.updateBasket} />
                </tbody>
            </Table>

            <div className='text-center'>
                <Link to='/summary' className='btn btn-success btn-lg'>Next</Link>
            </div>
        </main>
    );
}
