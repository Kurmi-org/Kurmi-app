
import ProductCard from '@/components/Salecard'

export default function PendingOrdersPage() {
    return (
        <div className="p-4">
            <div>
                <h1 className="font-bold text-2xl p-3 md:text-center md:text-left md:text-3xl">Productos Vendidos</h1>
            </div>
            <div className="md:flex-center md:items-start">

            <ProductCard />
            </div>
        </div>
    )
}