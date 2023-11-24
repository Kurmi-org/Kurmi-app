"use client";
import { useState, useEffect } from 'react';
import { animated, useSpring } from 'react-spring';
import "../../src/app/global.css"

export default function SplashScreen() {
    const [isMounted, setMounted] = useState(false);

    const animation = useSpring({
        opacity: isMounted ? 1 : 0,
        transform: isMounted ? 'translateY(0)' : 'translateY(-50px)',
        delay: 300,
    });

    useEffect(() => {
        setMounted(true);
        const timer = setTimeout(() => {
            if (typeof window !== 'undefined') {
                window.location.href = '/client/home_client';
            }
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <animated.div style={animation} className="flex flex-col items-center justify-center">
                <h1 className="text-6xl font-extrabold text-gray-800">KURMI</h1>
            </animated.div>
        </div>
        
    );
}