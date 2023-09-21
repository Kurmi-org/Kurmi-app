import CartProduct from "@/app/components/Cart_product";
import CartSale from "@/app/components/Cart_sale";
import Link from "next/link";

export default function Cart() {
    return (
        <div className="p-4">
            <div>
                <h1 className="font-bold text-2xl p-3 text-center md:text-left md:text-3xl">Revisar Pedido</h1>
            </div>
            {/* <div className="md:grid md:grid-cols-3 md:space-x-4 "> */}
            <div className="md:flex md:space-x-4 md:items-start">
                <div className="mt-2 flex flex-col md:w-5/6">
                    <CartProduct />
                    <Link href="/"
                        className="bg-lime-800 p-3 w-48 text-center rounded-lg font-bold hover:bg-lime-700 text-white mt-6">
                        Seguir Comprando
                    </Link>
                </div>
                <div className="mt-3 flex flex-col justify-end md:mt-0 md:w-2/6">
                    <h1 className="font-bold text-2xl p-3">Total Pedido</h1>
                    <CartSale />
                    <Link href="#"
                        className="bg-yellow-700 p-3 w-48 text-center flex-end rounded-lg font-bold hover:bg-yellow-600 text-white mt-6">
                        Procesar Pedido
                    </Link>
                </div>
            </div>
        </div>
    )
}