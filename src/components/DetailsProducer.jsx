"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import urlApi from "@/config/globals_api";
import Image from "next/image";

const DetailsProducer = ({ _id }) => {
  const id = _id;
  const [producer, setProducer] = useState({});
  const [listProductId, setlistProductId] = useState([]);
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);
  const [aauth, setAuth] = useState(true);

  const deleteProduct = async (id) => {

    try {
      const res = await fetch(`${urlApi}/deleteProduct/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"), // Asegúrate de que el token es el correcto
        },
      });

      const result = await res.json();
      if (res.ok) {
        window.location.href = '/admin/list_producer_home';
        // Aquí podrías redirigir al usuario o cerrar el modal de edición, por ejemplo
      } else {
        // Manejar los errores de la respuesta
        console.error("Error al eliminar el producto:", result.message);
        // Aquí podrías mostrar un mensaje de error al usuario
      }
    } catch (error) {
      // Manejar errores de la solicitud
      console.error("Error al enviar la solicitud de actualización del producto:", error);
      // Aquí podrías mostrar un mensaje de error al usuario
    }
  };

  useEffect(() => {

    setToken(localStorage.getItem("token"));
    setRole(localStorage.getItem("role"));
    const auth = () => {
      if (token && role === "admin") {
        setAuth(true);
      } else {
        setAuth(false);
      }
    };
    if (aauth === false) {
      window.history.back();
      return;
    }

    
    


    const getProducer = async () => {
      const response = await fetch(urlApi + "/getProducerById/" + id, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const producer = await response.json();
      setProducer(producer);
    };
    const getlistProductId = async () => {
      const response = await fetch(urlApi + "/getProductsByProducer/" + id, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const listProductId = await response.json();
      setlistProductId(listProductId);
    };

    getProducer();
    getlistProductId();
  }, [aauth, id, role, token]);

  if (!Array.isArray(listProductId)) {
    window.location.href = "/not-found";
    return;
  }
  return (
    <div className="flex  flex-col justify-center  space-y-10 w-full mx-auto mb-16">
      <div className="flex flex-col items-center mt-5 m-5">
        <div className="bg-lime-200 w-full md:w-4/6 border-t border-x border-lime-500 rounded-lg shadow-2xl shadow-lime-900/50 md:flex md:h-auto">
          <div className="flex flex-col items-center p-2 md:flex-row md:flex-grow">
            <Image
              className="rounded-lg shadow-2xl shadow-black-900/50 md:w-full md:flex-grow border-2 border-transparent object-cover h-full w-full"
              src="/agricultora.jpg"
              width={350}
              height={350}
              alt="..."
            />
          </div>
          <div className="flex flex-col items-center mt-2 md:grid md:grid-row content-center md:w-1/2 md:min-w-1/2">
            <div className="w-5/6 md:justify-self-center">
              <p>
                Nombre: {producer.name} {producer.last_names}
              </p>
              <p>CI: {producer.ci}</p>
              <p>Usuario: {producer.user}</p>
              <p>
                Fecha de nacimiento:{" "}
                {new Date(producer.date_birth).toLocaleDateString()}
              </p>
              <p>Departamento: {producer.location?.departament}</p>
              <p>Provincia: {producer.location?.province}</p>
              <p>Dirección: {producer.location?.address}</p>
              <p>Teléfono: {producer.phone}</p>
              <p>Correo: {producer.email}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-5 m-5">
        <span className="p-3 text-center mt-2 font-bold text-2xl uppercase">
          Productos
        </span>
      </div>
      <div className="m-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 border-l">
        {listProductId.map((product) => (
          <div key={product._id}>
            <div className="product  w-full  mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:max-w-sm md:w-full">
              <Image
                className="rounded-t-lg w-full border-4 border-transparent"
                src="/produc.jpg"
                width={350}
                height={350}
                alt="Product image"
              />

              <div className="p-5">
                <h5 className="mb-1 text-2xl font-bold tracking-tight text-blue-600 dark:text-white">
                  {product.name}
                </h5>
                <p className="mb-1 font-normal text-blue-600 dark:text-gray-400">
                  Descripción: {product.description}
                </p>
                <p className="mb-1 font-normal text-blue-600 dark:text-gray-400">
                  Precio: {product.price} Bs.
                </p>
                <p className="mb-1 font-normal text-blue-600 dark:text-gray-400">
                  Stock: {product.stock}
                </p>
                <p className="mb-1 font-normal text-blue-600 dark:text-gray-400">
                  Unidad: {product.unit}
                </p>
                <p className="mb-1 font-normal text-blue-600 dark:text-gray-400">
                  Tipo: {product.type}
                </p>
                <p className="mb-1 font-normal text-blue-600 dark:text-gray-400">
                  Listo para la venta: {product.readyForSale ? "Sí" : "No"}
                </p>
                <div className="flex justify-between items-center ">
                  <Link
                    className="m-2 "
                    href={`/admin/edit_product/${product._id}`}
                  >
                    <span className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">
                      Editar
                    </span>
                  </Link>
                  <button
                    className="m-2 "
                    onClick={() => deleteProduct(product._id)}
                  >
                    <span className="py-2 px-3 bg-red-400 hover:bg-red-300 text-red-900 hover:text-red-800 rounded transition duration-300">
                      Eliminar
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsProducer;
