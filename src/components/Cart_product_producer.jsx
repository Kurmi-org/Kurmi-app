'use client'
import Link from 'next/link'
import urlApi from '@/config/globals_api'
import { useState, useEffect } from 'react'

export default function CartProductProducer(props) {

    const [products, setProducts] = useState([])
    const id = props._id
    useEffect(() => {
        fetch(urlApi + '/getProductsByProducer/' + id)
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error ->', error))
    }, [id])

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
                {products.map((product) => (
                    <div className="table-row" key={1}>
                        <div className="table-cell p-3 bg-lime-200">{product.name}</div>
                        <div className="table-cell p-3 text-center">{product.stock}</div>
                        <div className="table-cell p-3 text-center bg-lime-200">Bs. {product.price}.00</div>
                        <div className="table-cell p-1">
                            <Link
                                href={`/client/detalis_product/${product._id}`}
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Ver Mas
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}