import { useState } from 'react';
import urlApi from '@/config/globals_api'
export default function registro_producto() {
  const [producto, setProducto] = useState({
    nombre: '',
    precio: 0,
    tipo: '',
    stock: 0,
    descripcion: '',
  });

  const handleSubmit = async () => {
    try {
      const response = await fetch(urlApi, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(producto),
      });

      if (response.ok) {

        console.log('Producto registrado con éxito');
      } else {
       
        console.error('Error al registrar el producto');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({
      ...producto,
      [name]: value,
    });
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-white">
      <div className="container mx-auto my-4 px-4 lg:px-20">
        <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
          <div className="flex">
            <h1 className="font-bold uppercase text-5xl">Registro de producto</h1>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
            <input
              type="text"
              name="nombre"
              value={producto.nombre}
              onChange={handleChange}
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              placeholder="nombre del producto*"
            />
            <input
              type="number"
              name="precio"
              value={producto.precio}
              onChange={handleChange}
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              placeholder="precio*"
            />
            <input
              type="text"
              name="tipo"
              value={producto.tipo}
              onChange={handleChange}
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              placeholder="tipo"
            />
            <input
              type="number"
              name="stock"
              value={producto.stock}
              onChange={handleChange}
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              placeholder="stock*"
            />
          </div>
          <div className="my-4">
            <textarea
              placeholder="descripcion*"
              name="descripcion"
              value={producto.descripcion}
              onChange={handleChange}
              className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <div className="my-2 w-1/2 lg:w-1/4">
            <button
              className="uppercase text-sm font-bold tracking-wide bg-green-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
              onClick={handleSubmit}
            >
              registrar producto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}