'use client';
import { useEffect } from 'react';

const Modal = ({ isOpen, children, onClose }) => {
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded shadow-lg max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl w-full ">
                <button onClick={onClose} className="float-right">X</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;