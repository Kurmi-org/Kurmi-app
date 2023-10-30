import Orders_P from "@/components/Orders"

export default function Orders(){
    return(
        <div className="p-4 mx-8 mb-8">
            <h1 className="text-center text-2xl font-bold uppercase p-2 mb-3">Lista de ordenes</h1>
            <Orders_P/>
        </div>
    )
}