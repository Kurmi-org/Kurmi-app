"use client";
import Image from "next/image";
import Link from "next/link";
import urlApi from '@/config/globals_api'
import { useState, useEffect, useSyncExternalStore } from 'react'
import { addArrProductsCart, updateStock } from '@/config/addCart'
import { set } from "react-hook-form";

export default function ProductDetail(props) {

    const [product, setProduct] = useState({})
    const [popUp, setBoolPopUp] = useState(false)
    const [quantity, setQuantity] = useState(1)

    //quantity change
    const handleQuanrity = async (e) => {
        setQuantity(e.target.value)
    }

    const id = props._id

    useEffect(() => {
        fetch(urlApi + '/getProduct/' + id)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(error => console.error('Error ->', error))
    }, [id])

    return (
        <div className="flex flex-col items-center mt-5">
            <h1 className="p-3 text-center mt-2 font-bold text-2xl uppercase">
                {product.name}
            </h1>
            <div className="bg-lime-200 w-4/6 border-t border-x border-lime-500 rounded-lg shadow-2xl shadow-lime-900/50 md:flex md:h-80">
                <div className="flex flex-col items-center p-2 md:flex-row">
                    <Image
                        src="/img/asd.jpg"
                        width={320}
                        height={100}
                        alt="..."
                        className="rounded-lg shadow-2xl shadow-black-900/50 md:w-96"
                    />
                </div>
                <div className="flex flex-col items-center mt-2 md:grid md:grid-row content-center">
                    <div className="w-5/6 md:justify-self-center">
                        <p>Descripcion: {product.description}</p>
                        <p>Tipo: {product.type}</p>
                        <p>Cantidad disponible: {product.stock} u</p>
                        <p>Precio/u: Bs {product.price}.00</p>
                    </div>
                    <div className="text-white flex space-x-3 p-5 md:justify-self-center">
                        <button onClick={() => setBoolPopUp(!popUp)} className={`${popUp ? 'disabled' : ''} bg-lime-800 p-2 rounded-lg font-bold hover:bg-lime-700`}>Agregar al Carrito</button>
                        <Link href={`/productores_profile/${product.producer}`} className="bg-lime-800 p-2 rounded-lg font-bold hover:bg-lime-700">info Productor</Link>
                    </div>
                </div>

            </div>


            <div className={popUp == false ? "hidden" : "absolute mt-8 flex flex-col items-center bg-lime-200 w-2/6 border-t border-x border-lime-500 rounded-lg shadow-2xl shadow-lime-900/50 md:flex md:p-3"}>
                <h1 className="p-3 text-center font-bold text-xl uppercase">
                    Indique la cantidad deseada
                </h1>
                <input type="number" className="rounded-full opacity-70 h-8 p-4"
                    value={quantity} onChange={handleQuanrity} />
                <div className="flex space-x-3 p-5 md:justify-self-center">
                    <button onClick={() => {
                        addArrProductsCart(product, quantity)
                        updateStock(product._id, quantity)
                        setBoolPopUp(!popUp)
                    }}
                        className="bg-lime-800 p-2 rounded-lg font-bold hover:bg-lime-700">Confirmar</button>
                    <button onClick={() => setBoolPopUp(!popUp)} className="bg-lime-800 p-2 rounded-lg font-bold hover:bg-lime-700">Cancelar</button>

                </div>
            </div>

            <Link href="/" className="bg-lime-800 p-2 rounded-lg font-bold hover:bg-lime-700 text-white mt-3">Volver al Home</Link>
        </div>

    );
}