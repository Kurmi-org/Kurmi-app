"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import urlApi from "@/config/globals_api";
import Image from "next/image";

export default function ProductByProducer() {
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState(null);
    const [role, setRole] = useState(null);
    const [aauth, setAuth] = useState(true);

    useEffect(() => {
        setToken(localStorage.getItem("token"));
        setRole(localStorage.getItem("role"));

        const auth = () => {
            if (token && role === "producer") {
                setAuth(true);
            } else {
                setAuth(false);
            }
        }
        if (aauth === false) {
            window.history.back();
            return;
        }

        const getProducerProducts = async () => {
            try {
                const response = await fetch(urlApi + "/getProductsProducer", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });

                if (!response.ok) {
                    // Si la respuesta no es 2xx, manejar el error
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const productsData = await response.json();
                setProducts(productsData);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        };

        getProducerProducts();
    }, [aauth, role, token]);

    // Ahora el console.log mostrará el estado después de que se actualice.
    useEffect(() => {
        console.log(products);
    }, [products]);

    return (
        <div className='container mx-auto px-4'>
            <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {products.map((product) => (
                    <div key={product.id} className='bg-white rounded-lg shadow-md overflow-hidden'>
                        <div className='relative h-48'>
                            <Image src='/produc.jpg' layout='fill' objectFit='cover' alt={product.name} />
                        </div>
                        <div className='p-4'>
                            <h3 className='text-2xl font-bold'>{product.name}</h3>
                            <p className='text-gray-700'>{product.type}</p>
                            <p className='text-gray-700'>{product.description}</p>

                            <div className='mt-2 font-semibold'>Cantidad: {product.stock} u.</div>
                            <div className=' font-semibold'>Precio unitario: {product.price} Bs.</div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
