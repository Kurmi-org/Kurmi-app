import CartProduct from "@/components/Cart_product"
export default function page(params) {
    return(
        <div className="flex justify-center">
            <div className="w-5/6 mt-8">
                <h1 className="text-center text-2xl md:text-4xl mb-4 font-bold uppercase">Lista de Ordenes</h1>
                <CartProduct/>
            </div>
        </div>
    )
};
