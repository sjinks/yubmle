import React, { useContext } from 'react';
import { AppContext, ApplicationContext } from '../../context';
import { Link } from 'react-router-dom';
import AddonItem from '../AddonItem';
import LunchBox from '../LunchBox';

export default function Basket() {
    const ctx = useContext(AppContext) as ApplicationContext;

    const count = ctx.basket.reduce((acc, box) => {
        acc += Object.keys(box).length;
        return acc;
    }, 0);

    if (!count) {
        return (
            <main className="d-flex flex-column justify-content-center text-center">
                <p className='fs-1 fw-bold'>Your basket is empty.</p>
                <p>
                    <Link to='/menu'>Go buy some stuff</Link>
                </p>
            </main>
        );
    }

    const itemMap: Record<number, string> = {};
    const addonMap: Record<number, string> = {};

    Object.values(ctx.items.items).forEach((items) => {
        items.forEach((item) => {
            itemMap[item.id] = item.name;
        });
    });

    Object.values(ctx.items.addons).forEach((addon) => {
        addonMap[addon.id] = addon.name;
    });

    return (
        <main className="d-flex flex-column justify-content-center">
            {
                ctx.basket.map((_, i) => (
                    <LunchBox key={i} box={i} items={itemMap} />
                ))
            }

            <h3 className='text-primary fw-bolder'>Addons</h3>

            {ctx.items.addons.map((addon) => <AddonItem key={addon.id} addon={addon} count={ctx.addons[addon.id] ?? 0} updateAddon={ctx.updateAddon} />)}
        </main>
    );
}
