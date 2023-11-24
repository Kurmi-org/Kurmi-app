'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import urlApi from "@/config/globals_api";

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [matchInfo, setMatchInfo] = useState({ match: true, message: '' });

    useEffect(() => {
        if (password && repeatPassword) {
            if (password === repeatPassword) {
                setMatchInfo({ match: true, message: 'Las contraseñas coinciden.' });
            } else {
                setMatchInfo({ match: false, message: 'Las contraseñas no coinciden.' });
            }
        } else {
            setMatchInfo({ match: false, message: '' });
        }
    }, [password, repeatPassword]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            email: email,
            newPassword: password
        };
    
        try {
            // Realizar la solicitud PUT a la API
            const response = await fetch(urlApi + '/updatePassword', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
    
            const result = await response.json();
    
            if (response.ok) {
                console.log(result.message);
            } else {
                console.error(result.message);
            }
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
        }
    };

    return (
        <div className="max-w-[280px] mx-auto">
            <div className="flex flex-col items-center mt-[10vh]">
                <h2 className="mb-5 text-gray-900 font-mono font-bold text-xl">Olvidaste tu contraseña</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium"
                        placeholder="Nueva Contraseña"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        id="repeat"
                        name="repeat"
                        className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium"
                        placeholder="Repetir la Contraseña"
                        required
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                    />
                    <p className={`text-sm mb-2 ${matchInfo.match ? 'text-green-500' : 'text-red-500'}`}>
                        {matchInfo.message}
                    </p>
                    <button
                        type="submit"
                        className="bg-slate-500 hover:bg-slate-700 text-white text-base rounded-lg py-2.5 px-5 transition-colors w-full text-[19px]"
                        disabled={!matchInfo.match} // El botón se desactiva si las contraseñas no coinciden
                    >
                        Cambiar la Contraseña
                    </button>
                </form>
            </div>
        </div>
    );
}
