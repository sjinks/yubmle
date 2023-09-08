import React, { MouseEvent, Fragment, useContext } from 'react';
import { AppContext, ApplicationContext, Items } from '../../context';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

interface TableHeaderProps {
    boxen: number;
}

function TableHeader({ boxen }: TableHeaderProps) {
    const arr = new Array(boxen).fill(0);
    return (
        <>
            {arr.map((_, i) => <th key={i} scope='col'>Bag&nbsp;{i+1}<br/>⚡</th>
            )}
        </>
    );
}

interface CheckboxProps {
    box: number;
    group: string
    item: number;
    basket: ApplicationContext['basket'];
    updateBasket: ApplicationContext['updateBasket'];
}

function Checkbox({ basket, box, group, item, updateBasket }: CheckboxProps) {
    const handleCheckboxChange = (event: MouseEvent<HTMLInputElement>) => {
        if (event.target) {
            let { value } = event.target as HTMLInputElement;
            if (basket[box]?.[group] === +value) {
                value = '0';
            }

            updateBasket(box, group, +value);
        }
    };

    return (
        <Form.Check className="fs-1 fw-bold text-center" type="radio" checked={basket[box]?.[group] === item} name={`${group}_${box}`} value={item} onClick={handleCheckboxChange} />
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
                        <th scope='row'>{item.name}</th>
                        {arr.map((_, i) => <td key={i}><Checkbox basket={basket} box={i} group={group} item={item.id} updateBasket={updateBasket} /></td>)}
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
                                <td colSpan={boxen+1} className="text-center fs-3 fw-bolder bg-info position-relative">
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
        <main className="d-flex flex-column justify-content-center mb-3">
            <Table responsive>
                <thead className="text-center">
                    <tr>
                        <td>
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
                <Link to='/summary' className='btn btn-primary btn-lg'>Next</Link>
            </div>
        </main>
    );
}
