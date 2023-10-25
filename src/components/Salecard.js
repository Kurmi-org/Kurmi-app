import Image from "next/image";
import Link from "next/link";

export default function ProductCard(props) {
  return (
    <div className="flex flex-col">
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
                <table className="min-w-full text-center text-sm font-light">
                    <thead className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                        <tr>
                            <th scope="col" className=" px-6 py-4">
                                #
                            </th>
                            <th scope="col" className=" px-6 py-4">
                                Nombre
                            </th>
                            <th scope="col" className=" px-6 py-4">
                                Orden
                            </th>
                            <th scope="col" className=" px-6 py-4">
                                Estado
                            </th>
                            <th scope="col" className=" px-6 py-4">
                                reportar problema
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap  px-6 py-4 font-medium">
                                1
                            </td>
                            <td className="whitespace-nowrap  px-6 py-4">Mark</td>
                            <td className="whitespace-nowrap  px-6 py-4">Zanahorias</td>
                            <td className="whitespace-nowrap  px-6 py-4">En espera</td>
                            <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Reportar problema</button>

                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap  px-6 py-4 font-medium">
                                2
                            </td>
                            <td className="whitespace-nowrap  px-6 py-4 ">Jacob</td>
                            <td className="whitespace-nowrap  px-6 py-4">Papas</td>
                            <td className="whitespace-nowrap  px-6 py-4">En Espera</td>
                            <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">reportar problema</button>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
  );
}