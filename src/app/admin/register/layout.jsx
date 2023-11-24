import '../../global.css'
import Link from "next/link";

export default function LayoutRegister({children}){
    
return (
        <>
            <nav className="flex justify-center items-center py-2 mb-4 bg-transparent">
                <Link href="/admin/register/products" className="text-sm font-semibold text-gray-700 hover:bg-gray-200 hover:text-gray-900 px-2 py-1 rounded">
                    Registrar producto
                </Link>
                <span className="mx-2">|</span>
                <Link href="/admin/register/producers" className="text-sm font-semibold text-gray-700 hover:bg-gray-200 hover:text-gray-900 px-2 py-1 rounded">
                    Registrar productor
                </Link>
            </nav>
            {children}
        </>
    );
}