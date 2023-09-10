import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext, ApplicationContext } from '../../context';
import AddonItem from '../AddonItem';

export default function Addons() {
    const ctx = useContext(AppContext) as ApplicationContext;

    const addonMap: Record<number, string> = {};
    Object.values(ctx.items.addons).forEach((addon) => {
        addonMap[addon.id] = addon.name;
    });

    return (
        <main className="d-flex flex-column justify-content-center">
            <h2 className='bg-info-subtle p-4 fw-bolder mb-3 mt-3'>While you are here&hellip;</h2>
            <div className='mb-3'>
                {ctx.items.addons.map((addon) => <AddonItem key={addon.id} addon={addon} count={ctx.addons[addon.id] ?? 0} updateAddon={ctx.updateAddon} />)}
            </div>
            <div className='text-center'>
                <Link to='/thank-you' className='btn btn-primary btn-lg'>Next</Link>
            </div>
        </main>
    );
}
