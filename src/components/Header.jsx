import React, { useState } from 'react';
import Offer from './offer';
import { BsHandbag } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";


function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const navItems = [
        { name: 'Men', url: '#' },
        { name: 'Women', url: '#' },
        { name: 'Kids', url: '#' },
        { name: 'Apparel', url: '#' },
        { name: 'Offline Store', url: '#' }
    ];
    return (
        <header className="bg-gray-100 fixed w-full z-10">
            <Offer />
            <nav className="container mx-auto px-6 py-3">
                <div className="grid grid-cols-2 md:grid-cols-3">
                    {/* Logo */}
                    <div className="text-white font-bold text-xl">
                        <a className='bg-black italic' href="#">Logo.</a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <ul className="flex font-sans space-x-8">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <a href={item.url}
                                        className="block py-2 text-gray-500 transition-colors duration-300 ease-in-out transform hover:text-gray-800">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>


                    {/* Mobile Menu Button */}
                    <div className="md:hidden ml-auto">
                        <button
                            onClick={toggleMenu}
                            className="outline-none mobile-menu-button"
                            aria-label="Toggle navigation"
                        >
                            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Icons - search, cart, profile*/}
                    <div className='hidden md:block ml-auto'>
                        <ul className="flex items-center text-gray-700 space-x-8">
                            <li><a href="#" className="hover:text-gray-500"><FiSearch className='w-6 h-6' /></a></li>
                            <li><a href="#" className=" hover:text-gray-500"><BsHandbag className='w-6 h-6' /></a></li>
                            <li><a href="#" className=" hover:text-gray-500"><CgProfile className='w-6 h-6' /></a></li>
                        </ul>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`absolute top-24 right-0 w-[65%] p-3 bg-gray-100 rounded-2xl z-20 md:hidden transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0 right-6' : 'translate-x-full'}`}>
                    {/* Icons - cart & profile */}
                    <div className='px-3 py-2'>
                        <ul className="flex justify-between items-center text-gray-700 space-x-8">
                            <li><a href="#" className="hover:text-gray-500"><CgProfile className='w-6 h-6' /></a></li>
                            <li><a href="#" className="hover:text-gray-500"><BsHandbag className='w-6 h-6' /></a></li>
                        </ul>
                    </div>
                    {/* Search */}
                    <div className='py-2'>
                        <div className="relative">
                            <input
                                className="appearance-none pl-10 border-none transition-colors rounded-xl w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none"
                                id="username"
                                type="text"
                                placeholder="Search..."
                            />
                            <div className="absolute left-0 inset-y-0 flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    {/* Nav Items */}
                    <ul className="mt-4 space-y-4">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <a href={item.url} className="block px-2 py-2 hover:bg-gray-300 rounded-md">
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
