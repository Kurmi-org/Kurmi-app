import Image from "next/image";
import Link from "next/link";

export default function ProductCard(props) {
  return (
    <div className="w-9/6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      

      <div className="p-2">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          pago 
          
          <Link
          href="/productdetail"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Ver Mas
        </Link>
        </p>
       
      </div>
     
    </div>
  );
}