'use client'
import urlApi from '@/config/globals_api'
import { useState, useEffect } from 'react'

export default function Orders_P() {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(urlApi + '/getOrders')
            .then(res => res.json())
            .then(data => setOrders(data))
            .catch(error => console.error('Error ->', error))
    }, [])

    return (
        <div className="table w-full rounded-lg shadow-2xl shadow-lime-900/50">
            <div className="table-header-group">
                <div className="table-row font-bold ">
                    <div className="table-cell text-left p-3">Fecha del Pedido</div>
                    <div className="table-cell text-left p-3 text-center">Total</div>
                    <div className="table-cell text-left p-3 text-center">Estado</div>
                    <div className="table-cell text-left"></div>
                </div>
            </div>
            <div className="table-row-group">
                {orders.map((order) => (
                    <div className="table-row" key={order._id}>
                        <div className="table-cell p-3 bg-lime-200">{order.date_order}</div>
                        <div className="table-cell p-3 text-center">Bs. {order.total}.00</div>
                        <div className="table-cell p-3 text-center">{order.status}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}