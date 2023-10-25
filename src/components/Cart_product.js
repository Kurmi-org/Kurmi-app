'use client'
import urlApi from '@/config/globals_api'
import { useState, useEffect } from 'react'
const arr = [1,2,3,4,5]
export default function CartProduct(props) {


    return (
        <div className="table w-full rounded-lg shadow-2xl shadow-lime-900/50">
            <div className="table-header-group">
                <div className="table-row font-bold ">
                    <div className="table-cell text-left p-3">Producto</div>
                    <div className="table-cell text-left p-3 text-center">Cantidad</div>
                    <div className="table-cell text-left p-3 text-center">Precio</div>
                    <div className="table-cell text-left"></div>
                </div>
            </div>
            <div className="table-row-group">
                {arr.map((product) => (
                    <div className="table-row" key={1}>
                    <div className="table-cell p-3 bg-lime-200">name</div>
                    <div className="table-cell p-3 text-center">cantidad</div>
                    <div className="table-cell p-3 text-center bg-lime-200">Bs. 100.00</div>
                    <div className="table-cell p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"/></svg>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}