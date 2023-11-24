'use client'
import { createOrder } from "@/config/addCart"

export default function ButtonPorcesar() {
    return (
        
            <button onClick={() => {createOrder()
                                    }}
                className="bg-yellow-700 p-3 w-48 text-center flex-end rounded-lg font-bold hover:bg-yellow-600 text-white mt-6">
                Procesar Pedido
            </button>
        
    )
}