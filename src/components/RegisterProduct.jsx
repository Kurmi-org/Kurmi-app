"use client";
import "../app/layout";
import React, { use } from "react";
import { useState, useEffect } from "react";
import urlApi from "@/config/globals_api";
import Image from "next/image";
import Modal from "./Modal";



const RegisterProduct = () => {
  const [availabilityDate, setAvailabilityDate] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0.0);
  const [stock, setStock] = useState(0);
  const [unit, setUnit] = useState("");
  const [type, setType] = useState("");
  const [producers, setProducers] = useState([]);

  const [isProducerModalOpen, setIsProducerModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);
  const [aauth, setAuth] = useState(true);
  const [producerId, setProducerId] = useState(null);

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
      return; // Detiene la ejecución de las funciones siguientes
    }
  }, [token, role, aauth]);


  

  const fetchProducers = async () => {
    try {
      const res = await fetch(urlApi + "/getProducer", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      } else {
        const data = await res.json();
        setProducers(data);
      }
    } catch (error) {
      console.error("Ha ocurrido un error:", error);
    }
  };

  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files);
    Promise.all(
      files.map((file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      })
    ).then(
      (images) => setImages(images),
      (error) => console.error(error)
    );
    setIsModalOpen(true);
  };
  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
    if (images.length === 0) {
      setIsModalOpen(false);
    }
  };

  const registerProduct = async (e) => {
  e.preventDefault();

  if (!producerId) {
    alert("Debe seleccionar un productor");
    return;
  }

  const img =["image.jpg", "image2.jpg"];

  const data = {
    name,
    description,
    price,
    stock,
    unit,
    images: img.length > 0 ? img : [],
    type,
    readyForSale:availabilityDate,
    producer: producerId,
  };
    console.log(data);
    const res = await fetch(urlApi + "/createProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(data),
    });
    if (res.ok){
       
         alert("su registro fue exitoso");
         setName("");
         setDescription("");
         setPrice(0.0);
         setStock(0);
         setUnit("");
         setType("");
         setImages([]);
    } else {
      alert("su registro no fue exitoso");
    }
  };

  return (
    <div className="flex justify-center items-start min-h-screen m-4">
      <form
        className="w-full max-w-md mt-10 space-y-4"
        onSubmit={registerProduct}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div>
            <label>Nombre</label>
            <input
              className="w-full p-2 border border-gray-300 rounded outline-none focus:border-indigo-500"
              type="text"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Descripción</label>
            <input
              className="w-full p-2 border border-gray-300 rounded outline-none focus:border-indigo-500"
              type="text"
              placeholder="Descripción"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Precio</label>
            <input
              className="w-full p-2 border border-gray-300 rounded outline-none focus:border-indigo-500"
              type="number"
              placeholder="Precio"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Stock</label>
            <input
              className="w-full p-2 border border-gray-300 rounded outline-none focus:border-indigo-500"
              type="number"
              placeholder="Stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Unidad</label>
            <input
              className="w-full p-2 border border-gray-300 rounded outline-none focus:border-indigo-500"
              type="text"
              placeholder="Unidad"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Tipo</label>
            <select
              className="w-full p-2 border border-gray-300 rounded outline-none focus:border-indigo-500"
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            >
              <option value="">Selecciona un tipo</option>
              <option value="tuberculos" selected>
                Tubérculos
              </option>
              <option value="cereales">Cereales</option>
              <option value="frutas">Frutas</option>
              <option value="verduras">Verduras</option>
              <option value="legumbres">Legumbres</option>
            </select>
          </div>
          <label
            htmlFor="image-upload"
            className="w-full p-2 border border-gray-300 rounded outline-none focus:border-indigo-500 mb-4 cursor-pointer"
          >
            Agregar imágenes
          </label>
          <input
            id="image-upload"
            className="hidden"
            type="file"
            multiple
            accept="image/*"
            onChange={handleImagesChange}
          />
          {images.length > 0 && (
            <button onClick={() => setIsModalOpen(true)}>
              Ver todas las fotos
            </button>
          )}
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <div className="overflow-auto max-h-screen p-4">
              {images.map((image, index) => (
                <div key={index} className="relative mb-4">
                  <Image
                    src={image}
                    alt={`Imagen ${index + 1}`}
                    width={100}
                    height={100}
                    layout="responsive"
                    objectFit="cover"
                    className="rounded w-full md:w-auto"
                  />
                  <button
                    type="button"
                    className="p-2 bg-red-500 text-white rounded absolute top-0 right-0 m-2"
                    onClick={() => removeImage(index)}
                  >
                    Eliminar
                  </button>
                </div>
              ))}
            </div>
          </Modal>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 text-lg text-gray-700 m-4">
          <div className="flex items-center space-x-2">
            <label>Fecha de disponibilidad:</label>
            <input
              className="p-2 border border-gray-300 rounded outline-none focus:border-indigo-500"
              type="date"
              value={availabilityDate}
              onChange={(e) => setAvailabilityDate(e.target.value)}
              required
            />
          </div>
          <button
            className="w-full p-2 bg-indigo-500 text-white font-semibold rounded hover:bg-indigo-600 "
            type="button"
            onClick={async () => {
              setIsProducerModalOpen(true);
              await fetchProducers(); // Llama a fetchProducers cuando se abre el modal
            }}
          >
            productor
          </button>
        </div>
        <button
          className="w-full p-2 bg-indigo-500 text-white font-semibold rounded hover:bg-indigo-600"
          type="submit"
        >
          Registrar producto
        </button>

        {isProducerModalOpen && (
          <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded shadow-lg max-h-3/4 overflow-auto flex flex-col items-center">
              <div className="w-full flex justify-between items-center">
                <input
                  className="p-2 border border-gray-300 rounded outline-none focus:border-indigo-500 flex-grow"
                  type="text"
                  placeholder="Buscar productor"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <button
                  onClick={() => setIsProducerModalOpen(false)}
                  className="ml-4 p-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
                >
                  Cerrar
                </button>
              </div>
              <div className="flex flex-col items-stretch mt-4 w-full">
                <div>
                  {producers
                    .filter((producer) =>
                      `${producer.name} ${producer.last_names} ${producer.user}`
                        .toLowerCase()
                        .includes(searchValue.toLowerCase())
                    )
                    .map((producer, index) => (
                      <div
                        key={index}
                        className={`p-4 ${index % 2 === 0 ? "bg-gray-100" : ""}`}
                        onClick={() => {
                          setProducerId(producer._id);
                          setIsProducerModalOpen(false);
                        }}
                      >
                        <h2>
                          {producer.name} {producer.last_names}
                        </h2>
                        <p>({producer.user})</p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default RegisterProduct;
