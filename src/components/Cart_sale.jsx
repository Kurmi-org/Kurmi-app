'use client'
import { useState, useEffect } from 'react'
import {arr_prod_card} from '@/config/addCart'
import urlApi from '@/config/globals_api';

export default function CartSale(params) {
    const [subtotal, setSubtotal] = useState(calculateSubtotal());
    const [token, setToken] = useState(null);
    const [role, setRole] = useState(null);
    const [aauth, setAuth] = useState(true);
    const [rate, setRate] = useState();

    function calculateSubtotal() {
        return arr_prod_card.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    }

    useEffect(() => {
        setToken(localStorage.getItem('token'));
        setRole(localStorage.getItem('role'));

        const auth = () => {
            if (token && (role === 'producer' || role === 'client')) {
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

        const getRstes = async () => {
            const response = await fetch(`${urlApi}/getRate`, {
                method: 'GET',
                headers: {
                     "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            setRate(data[0]);
            console.log(data[0]);
            return data[0];
        }
        getRstes();

    const updateSubtotal = () => {
        const newSubtotal = calculateSubtotal() + rate;
        setSubtotal(newSubtotal);
    };

      window.addEventListener('cartChanged', updateSubtotal);

      return () => {
        window.removeEventListener('cartChanged', updateSubtotal);
      };
      
    }, [aauth, rate, role, token]);

    return (
        <div className="table w-full border-t-2 border-lime-500 rounded-lg shadow-2xl shadow-lime-900/50">
            <div className="table-header-group">
                <div className="table-row font-bold ">
                    <div className="table-cell"></div>
                    <div className="table-cell"></div>
                </div>
            </div>
            <div className="table-row-group">
                <div className="table-row">
                    <div className="table-cell p-3 text-end">Subtotal</div>
                    <div className="table-cell p-3 text-start">Bs. {subtotal}.00</div>
                    
                </div>
                <div className="table-row">
                    <div className="table-cell p-3 text-end">Impuestos</div>
                    <div className="table-cell p-3 text-start">Bs. {rate && rate.increment ? rate.increment : 'Cargando...'}.00</div>
                </div>
                <div className="table-row">
                    <div className="table-cell p-3 text-end border-t-2 border-black">Total</div>
                    <div className="table-cell p-3 text-start border-t-2 border-black">Bs. {subtotal}.00</div>
                </div>
            </div>
        </div>
    );
}