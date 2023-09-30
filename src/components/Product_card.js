import Image from "next/image";
import Link from "next/link";

export default function ProductCard(props) {
  return (
    <div className="w-4/6 md:max-w-sm mt-5 border-t-4 border-yellow-300 rounded-lg shadow bg-green-900 shadow-2xl shadow-lime-900/50">
      <div className="flex justify-center mt-8">
      <Image
        className="rounded-lg md:w-5/6"
        src="/img/papas.jpg"
        width={300}
        height={200}
        alt="..."
      />
      </div>

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <Link
          href="/productdetail"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Ver Mas
        </Link>
      </div>
    </div>
  );
}
