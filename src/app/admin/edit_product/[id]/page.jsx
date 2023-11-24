import EditProduct from "@/components/EditProduct"
export default function EditProductPage({params}) {
    const {id} = params;
    return (
        <div>
            <EditProduct _id={id}  />
        </div>
    )
}