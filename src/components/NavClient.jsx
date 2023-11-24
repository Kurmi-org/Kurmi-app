"use client";
import '../app/global.css';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Search from './Search';
import Logout from './Logout';
import { FaUser } from 'react-icons/fa';

const NavClient = () => {
    const [token, setToken] = useState(null);
    const [role, setRole] = useState(null);

    useEffect(() => {
        setToken(localStorage.getItem('token'));
        setRole(localStorage.getItem('role'));
    }, []);

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileMenuButtonClick = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };



    return (
        <nav className=" m-4 bg-gray-300">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-4">
                        <div>
                            <Link href="/" >
                                <span className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                                    <svg className="h-6 w-6 mr-1 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                    <span className="font-bold">KURMI</span>
                                </span>
                            </Link>
                        </div>
                        <Search />




                        <div className="hidden md:flex items-center space-x-1">
                            <Link href="/client/home_client" >
                                <span className="py-5 px-3 text-gray-700 hover:text-gray-900">Home</span>
                            </Link>
                            {token && role === 'client' && (
                                <>
                                    <Link href="/client/list_order">
                                        <span className="block py-2 px-4 text-sm hover:bg-gray-200">Ordenes</span>
                                    </Link>
                                    <Link href="/client/cart">
                                        <span className="block py-2 px-4 text-sm hover:bg-gray-200">Carrito</span>
                                    </Link>
                                </>
                            )}

                        </div>
                    </div>

                    {!token ? (
                        <div className="hidden md:flex items-center space-x-1">
                            <Link href="/auth/login">
                                <span className="py-5 px-3">Login</span>
                            </Link>
                            <Link href="/auth/register_client">
                                <span className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">Register</span>
                            </Link>
                        </div>
                    ) : (
                        <div className="hidden md:flex items-center space-x-1">
                            <Link
                                href="/client/profile"
                                className="m-4 text-blue-500 hover:text-blue-700"
                            >
                                <FaUser />
                            </Link>
                            <Logout />
                        </div>
                    )}

                    <div className="md:hidden flex items-center">
                        <button className="mobile-menu-button" onClick={handleMobileMenuButtonClick}>
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>

            <div className={`mobile-menu ${isMobileMenuOpen ? '' : 'hidden'} md:hidden`}>
                <Link href="/client/home_client">
                    <span className="py-5 px-3 text-gray-700 hover:text-gray-900 block">Home</span>
                </Link>
                {token && role === 'client' && (
                    <>
                        <Link href="/client/list_order">
                            <span className="block py-2 px-4 text-sm hover:bg-gray-200">Ordenes</span>
                        </Link>
                        <Link href="/client/cart">
                            <span className="block py-2 px-4 text-sm hover:bg-gray-200">Carrito</span>
                        </Link>
                    </>
                )}
                {!token ? (
                    <div className="flex items-center space-x-1">
                        <Link href="/auth/login">
                            <span className="py-5 px-3 block">Login</span>
                        </Link>
                        <Link href="/auth/register_client">
                            <span className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300 block">Register</span>
                        </Link>
                    </div>
                ) : (
                    <div className='flex'>
                        <Link href="/client/profile">
                            <span className="block py-2 px-4 text-sm hover:bg-gray-200">
                                Profile
                            </span>
                        </Link>
                        <Logout />
                    </div>
                )}
            </div>
        </nav >
    );
};

export default NavClient;