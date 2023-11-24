"use client";
import "../app/global.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
const MainError = () => {
    return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 animate-pulse">
        <div className="max-w-md w-full space-y-8">
            <div className="text-center">
                <FontAwesomeIcon icon={faUser} size="6x" className="mx-auto mb-4 w-1/2 h-auto"/>
                <h2 className="mt-2 text-center text-6xl font-extrabold text-gray-900">
                    404
                </h2>
                <p className="mt-2 text-center text-2xl text-gray-600">
                    ¡Oh no, parece que te has perdido!
                </p>
                <p className="mt-2 text-center text-xl text-gray-600">
                    El granjero está buscando sus órdenes. Por favor, vuelve al camino correcto.
                </p>
            </div>
        </div>
    </div>
    );
}
export default MainError;