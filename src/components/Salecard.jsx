"use client";
import Image from "next/image";
import Link from "next/link";
import urlApi from '@/config/globals_api'
import { useState, useEffect } from 'react'
import { filterdProductProducer } from '@/config/salesProducer';

export default function ProductCard(props) {

    const [sales, setSales] = useState([])
    const [totalSum, setTotalSum] = useState(0);
    const [token, setToken] = useState(null);
    const [role, setRole] = useState(null);
    const [aauth, setAuth] = useState(true);

    useEffect(() => {

        setToken(localStorage.getItem('token'));
        setRole(localStorage.getItem('role'));

        const auth = () => {
            if (token && (role === 'producer')) {
                setAuth(true);
            }
            else {
                setAuth(false);
            }
        }
        if (aauth === false) {
            window.history.back();
            return;
        }

        if (typeof window === 'undefined') {
            if (!Array.isArray(user)) {
                window.location.href = "/not-found";
                return;
            }
        }


        const fetchSales = async () => {
            const saless = await filterdProductProducer(); // await the promise
        
            // Calculate total sum using the fetched sales data
            const newTotalSum = saless.reduce((sum, product) => {
                return sum + product.product.price * product.quantity;
            }, 0);
        
            // Then set state with the fetched data and calculated sum
            setSales(saless);
            setTotalSum(newTotalSum);
        };

        fetchSales();
    }, [aauth, props.sales, role, token]);

    return (
        <div>
            <div className="table w-full rounded-lg shadow-2xl shadow-lime-900/50">
                <div className="table-header-group">
                    <div className="table-row font-bold ">
                        <div className="table-cell text-center p-3">Producto</div>
                        <div className="table-cell p-3 text-center">Cantidad</div>
                        <div className="table-cell p-3 text-center">Total</div>
                    </div>
                </div>
                <div className="table-row-group">
                    {sales.map((prod) => (
                        <div className="table-row" key={prod.product.id}>
                            <div className="table-cell p-3 text-center bg-lime-200">{prod.product.name}</div>
                            <div className="table-cell p-3 text-center">{prod.quantity} u.</div>
                            <div className="table-cell p-3 text-center bg-lime-200">Bs. {prod.product.price * prod.quantity}.00</div>
                        </div>
                    ))}

                    <div className="table-row" key={1}>
                        <div className="table-cell h-1 bg-black w-6/6"></div>
                        <div className="table-cell h-1 bg-black w-6/6"></div>
                        <div className="table-cell h-1 bg-black w-6/6"></div>
                    </div>
                    <div className="table-row" key={1}>
                        <div className="table-cell p-3 "></div>
                        <div className="table-cell p-3 text-end font-bold">Ganancia Total</div>
                        <div className="table-cell p-3 text-center">BS. {totalSum}.00</div>
                    </div>
                </div>
            </div>
        </div>
    );
}