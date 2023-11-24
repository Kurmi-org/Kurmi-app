"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import '@/app/global.css';
import urlApi from '@/config/globals_api';


export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch(urlApi + '/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: username,
                password
            })
        });

        const data = await response.json();
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.rol);

        //mostar lo que almacena el localstorage
        console.log(localStorage.getItem('role'));

        //redirecionar segun al tipo de rol que ocupa el usuario
        if (data.rol == 'client') {
            window.location.href = '/client/home_client';
        } else if (data.rol == 'producer') {
            window.location.href = '/producer/home_producer';
        } else if (data.rol == 'admin') {
            window.location.href = '/admin/list_producer_home';
        } else {
            alert('Usuario o contraseña incorrectos');
        }


    };

    return (
        <div className="max-w-[280px] mx-auto ">
            <div className="flex flex-col items-center mt-[10vh]">
                <h2 className="mb-5 text-gray-900 font-mono font-bold text-xl">Sign Up</h2>
               
                <form onSubmit={handleSubmit}>
                    <input type="text" id='user' name='user' 
                        className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium " placeholder="Username" required
                        value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" id='password' name='password'
                        className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium " placeholder="Password" required
                        value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type='submit' className="bg-slate-500 hover:bg-slate-700 text-white text-base rounded-lg py-2.5 px-5 transition-colors w-full text-[19px]">Log In</button>
                </form>
            
            </div>
            <div className="mt-10 text-center flex justify-center items-center flex-row">
                <Link href="/auth/forgot_password">
                    <span className="text-gray-500 hover:text-gray-900">Olvidaste tu Contraseña?</span>
                </Link>
            </div>
        </div>
    );
};