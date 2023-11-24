"use client";

import { useState, useEffect } from "react";
import urlApi from "@/config/globals_api";
import Image from "next/image";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const Profile = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const res = await fetch(`${urlApi}/getProfile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      setUser(data);
      setLoading(false);
    };
    getUser();
  }, []);

  const handleUpdate = async (event) => {
    event.preventDefault();

    const increment = event.target.elements.ganancias.value;

    const response = await fetch(`${urlApi}/updateRate`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ increment }),
    });

    if (response.ok) {
      toast.success("¡Actualización exitosa!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      setIsOpen(false);
    } else {
      const data = await response.json();
      if (!data.status.ok) {
        // Aquí puedes agregar la lógica para mostrar el error
        toast.error("Hubo un error en la actualización", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen flex-col">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        <p className="mt-4 text-lg font-semibold text-gray-700">Cargando...</p>
      </div>
    );
  }
  return (
    <div className="flex justify-center mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-5/6">
        <div className="flex items-center justify-center">
          <div className="w-64 h-64 relative">
            {/* Aquí va la foto del administrador */}
            <Image
              src="/agricultora.jpg"
              alt="Foto del administrador"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>
        <div className="border-l md:border-l-0 border-black md:pl-4">
          <div className="m-4 text-gray-900">
            <p className="text-lg font-semibold">
              Nombre: <span className="font-normal">{user.name}</span>
            </p>
            <p className="text-lg font-semibold">
              Apellidos: <span className="font-normal">{user.last_names}</span>
            </p>
            <p className="text-lg font-semibold">
              CI: <span className="font-normal">{user.ci}</span>
            </p>
            <p className="text-lg font-semibold">
              Usuario: <span className="font-normal">{user.user}</span>
            </p>
            <p className="text-lg font-semibold">
              Fecha de nacimiento:{" "}
              <span className="font-normal">
                {new Date(user.date_birth).toLocaleDateString()}
              </span>
            </p>
            <p className="text-lg font-semibold">
              Departamento:{" "}
              <span className="font-normal">{user.location.departament}</span>
            </p>
            <p className="text-lg font-semibold">
              Provincia:{" "}
              <span className="font-normal">{user.location.province}</span>
            </p>
            <p className="text-lg font-semibold">
              Dirección:{" "}
              <span className="font-normal">{user.location.address}</span>
            </p>
            <p className="text-lg font-semibold">
              Teléfono: <span className="font-normal">{user.phone}</span>
            </p>
            <p className="text-lg font-semibold">
              Email: <span className="font-normal">{user.email}</span>
            </p>
            <div className="flex justify-center m-4">
              <button
                onClick={() => setIsPassword(true)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Cambiar contraseña
              </button>
              {isPassword && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                  <div className="bg-white p-4 rounded">
                    <h2 className="mb-4 text-lg font-semibold">
                      Modificar contraseña
                    </h2>
                    <form
                      onSubmit={(event) => {
                        event.preventDefault();
                        // Aquí puedes agregar la lógica para aplicar los cambios
                        setIsPassword(false);
                      }}
                    >
                      <label
                        className="block mb-2 text-sm font-bold"
                        htmlFor="currentPassword"
                      >
                        Contraseña actual
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-4 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="currentPassword"
                        type="password"
                        required
                      />

                      <label
                        className="block mb-2 text-sm font-bold"
                        htmlFor="newPassword"
                      >
                        Nueva contraseña
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-4 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="newPassword"
                        type="password"
                        required
                      />

                      <label
                        className="block mb-2 text-sm font-bold"
                        htmlFor="confirmPassword"
                      >
                        Confirmar nueva contraseña
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-4 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="confirmPassword"
                        type="password"
                        required
                      />

                      <button
                        type="submit"
                        className="w-full px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline"
                      >
                        Aplicar
                      </button>
                    </form>

                    <button
                      onClick={() => setIsPassword(false)}
                      className="w-full px-4 py-2 mt-4 font-bold text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center">
            <button
              onClick={() => setIsOpen(true)}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Modificar porcentaje de ganancias
            </button>
          </div>

          {isOpen && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-4 rounded">
                <h2 className="mb-4 text-lg font-semibold">
                  Modificar porcentaje de ganancias
                </h2>
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    handleUpdate(event);
                    setIsOpen(false);
                  }}
                >
                  <label
                    className="block mb-2 text-sm font-bold"
                    htmlFor="ganancias"
                  >
                    Porcentaje de ganancias
                  </label>

                  <input
                    className="w-full px-3 py-2 mb-4 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="ganancias"
                    type="number"
                    min="1"
                    required
                  />

                  <button
                    type="submit"
                    className="w-full px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline"
                  >
                    Aplicar
                  </button>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full px-4 py-2 mt-4 font-bold text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline"
                  >
                    Cancelar
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
