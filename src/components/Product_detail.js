"use client";
import Image from "next/image";

export default function ProductDetail({props}) {
    return (
        <div className="flex flex-col items-center mt-5">
            <h1 className="p-3 text-center mt-2 font-bold text-2xl uppercase">
                Nombre del Producto
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
                        <p>Descripcion: son las mejores papas cultivadas en la granja</p>
                        <p>Cantidad disponible: 70 u.</p>
                        <p>Precio/u: Bs 40.00</p>
                    </div>
                    <div className="text-white flex space-x-3 p-5 md:justify-self-center">
                        <button className="bg-lime-800 p-2 rounded-lg font-bold hover:bg-lime-700">Agregar al Carrito</button>
                        <button className="bg-lime-800 p-2 rounded-lg font-bold hover:bg-lime-700">info Productor</button>
                    </div>
                </div>

            </div>
        </div>
    );
}