import ProductByProducer from "@/components/ProductsByProducer"

export default function HomeProducerPage() {
    return (
        <div>

            <h1 className="mx-8 font-bold text-2xl p-3 text-center md:text-left md:text-3xl">Sus Productos</h1>

            <ProductByProducer />
        </div>
    )
}