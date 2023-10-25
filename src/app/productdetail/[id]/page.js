import ProductDetail from "@/components/Product_detail"

export default function ProductsDetail({ params }) {

  const {id} = params

  return (
    <div>
      <ProductDetail _id={id}/>
    </div>
  )
}