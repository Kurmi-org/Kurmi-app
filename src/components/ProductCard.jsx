import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ name, _id, description, price }) {

  //hacer una condicional por rol si es admin o cliente
  //si es admin que aparezca solo la impormacion del producto mas un boton de editar y eliminar pasadole el id del
  //si es cliente que se muestre la imfuormacion actual

    return (
      <div className="flex flex-col w-full mx-2 mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:max-w-sm md:w-5/6">
        <Image
            className="rounded-t-lg w-full border-4 border-transparent"
            src="/produc.jpg"
            width={350}
            height={350}
            alt="Product image"
        />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>

          <div className="flex justify-between items-center">
            <Link
              href={`/client/detalis_product/${_id}`}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Ver Mas
            </Link>
            <span className="font-bold text-gray-900 dark:text-gray-100">
              {price} Bs.
            </span>
          </div>
        </div>
      </div>
    );
}