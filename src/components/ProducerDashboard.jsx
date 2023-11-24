'use client'
import { useState, useEffect } from 'react';
import { filterdProductProducer } from '@/config/salesProducer'; // Asegúrate de que la ruta sea correcta
import urlApi from '@/config/globals_api';

export default function ProducerDashboard() {
    const [productSales, setProductSales] = useState([]);
    const [products, setProducts] = useState([]); // Estado para almacenar los productos agregados
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch para obtener las ventas de productos
        const fetchSalesData = async () => {
            try {
                setLoading(true);
                const salesData = await filterdProductProducer();
                setProductSales(salesData);
            } catch (error) {
                console.error('Error fetching product sales:', error);
            }
        };

        // Fetch para obtener los productos agregados por el productor
        const fetchProducts = async () => {
            try {
                const response = await fetch(urlApi + '/getProdForDashboard', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Asegúrate de obtener el token correctamente
                        'Content-Type': 'application/json'
                    },
                });
                if (!response.ok) {
                    throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
                }
                const productsData = await response.json();
                setProducts(productsData);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchSalesData();
        fetchProducts(); // Llamada a la función que realiza el fetch de los productos
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard del Productor</h1>

            {/* Earnings Section */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Ventas de Productos</h2>
                <div>
                    {productSales.map(sale => (
                        <div key={sale.product._id} className="mb-3">
                            <div>Producto: {sale.product.name}</div>
                            <div>Cantidad Vendida: {sale.quantity}</div>
                            {/* ... más detalles sobre la venta ... */}
                        </div>
                    ))}
                </div>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Productos Agregados</h2>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    {products.map((product) => (
                        <div key={product._id} className="mb-4">
                            <h3 className="text-lg font-bold text-gray-700">{product.name}</h3>
                            <p className="text-gray-600">{product.description}</p>
                            <p className="text-gray-500">Agregado en: {new Date(product.date_created).toLocaleDateString()}</p>
                            {/* ... más detalles sobre el producto ... */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
