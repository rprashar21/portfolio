import React from 'react';
import {links} from "../data/data.jsx";

const Navbar = () => {
    return (
        <nav className="bg-emerald-300 text-white px-4 py-3 flex items-center justify-between">
            <h2 className="text-3xl font-bold">
                <span className="text-3xl font-bold text-gray-900">Rohit Prashar</span>
            </h2>

            <div className="flex space-x-4">
                {links.map((link) => {
                    const {id, name, url} = link;
                    return <a key={id} href={url}>{name}</a>
                })}
            </div>
        </nav>
    );
};

export default Navbar;