'use client'
import urlApi from '@/config/globals_api'
import { useState, useEffect } from 'react'

function getStatusDisplay(statusCode) {
    const statusMap = {
        '1': { text: 'Creado', color: 'black' },
        '2': { text: 'Procesando', color: 'yellow' },
        '3': { text: 'Aceptado', color: 'green' },
        '4': { text: 'Cancelado', color: 'red' }
    };

    return statusMap[statusCode] || { text: 'Desconocido', color: 'black' };
}

export default function Orders_P() {

    const [orders, setOrders] = useState([])
    const [token, setToken] = useState(null);
    const [role, setRole] = useState(null);
    const [aauth, setAuth] = useState(true);

    useEffect(() => {

        setToken(localStorage.getItem('token'));
        setRole(localStorage.getItem('role'));

        const auth = () => {
            if (token && role === 'client') {
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

        fetch(urlApi + '/getOrdersByClient', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                const formattedOrders = data.map(order => ({
                    ...order,
                    date_order: new Date(order.date_order).toLocaleDateString('es-ES', {
                        year: 'numeric', month: 'long', day: 'numeric',
                        hour: '2-digit', minute: '2-digit', second: '2-digit'
                    }),
                    statusDisplay: getStatusDisplay(order.status.toString())
                }));
                setOrders(formattedOrders);
            })
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
                        <div className="table-cell p-3 grid justify-items-center">
                            <div className={`px-4 py-1 text-center w-3/6 rounded-lg text-white font-semibold ${order.statusDisplay.color === 'yellow' ? 'bg-yellow-300' : order.statusDisplay.color === 'red' ? 'bg-red-500' : 'bg-green-500'}`}>
                                {order.statusDisplay.text}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}