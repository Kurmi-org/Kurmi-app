"use client";
import '../app/global.css';
import { useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

const NavLogin = () => {
    const [isLogin, setIsLogin] = useState(true);

    const handleMobileMenuButtonClick = () => {
        setIsLogin(!isLogin);
    }

    return (
        <nav className="flex justify-end m-10">
            <div className="flex space-x-4 m-4">
                <Link href="/client/home_client"><FaArrowLeft /></Link>
            </div>
            <div className="flex space-x-4">
                <button onClick={handleMobileMenuButtonClick}>
                {isLogin ? (
                    <Link href="/auth/login">
                        <span className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">Login</span>
                    </Link>
                ) : (
                    <Link href="/auth/register_client">
                        <span className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">Register</span>
                    </Link>
                )}
            </button>
            </div>
            
        </nav>
    );
}

export default NavLogin;