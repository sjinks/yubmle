import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AppContext, ApplicationContext } from '../../context';
import LunchBox from '../LunchBox';

export default function Summary() {
    const ctx = useContext(AppContext) as ApplicationContext;

    const count = ctx.basket.reduce((acc, box) => {
        acc += Object.keys(box).length;
        return acc;
    }, 0);

    if (!count) {
        return <Navigate to='/menu' />;
    }

    const itemMap: Record<number, string> = {};

    Object.values(ctx.items.items).forEach((items) => {
        items.forEach((item) => {
            itemMap[item.id] = item.name;
        });
    });

    return (
        <main className="d-flex flex-column justify-content-center">

            <h2 className='text-center fw-bold mb-3'>Your Order</h2>

            <div className='mb-3'>
                {
                    ctx.basket.map((_, i) => (
                        <LunchBox key={i} box={i} items={itemMap} />
                    ))
                }
            </div>

            <div className='text-center'>
                <Link to='/addons' className='btn btn-success btn-lg'>Next</Link>
            </div>
        </main>
    );
}
