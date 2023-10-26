import ProductDetail from "@/components/Product_detail"

export default function ProductsDetail({ params }) {

  const {id} = params

  return (
    <div className="mb-8">
      <ProductDetail _id={id}/>
    </div>
  )
}