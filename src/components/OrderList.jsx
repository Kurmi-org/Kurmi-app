"use client";
import "../app/global.css";
import { useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import urlApi from "@/config/globals_api";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);
  const [aauth, setAuth] = useState(true);



  
  async function openModal(order) {
    setSelectedOrder(order);
    setIsModalOpen(true);

    try {
      const response = await fetch(urlApi + "/getOrderByFullId/" + order._id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      const data = await response.json();
      console.log(data);
      setSelectedOrder(data);
    } catch (error) {
      console.log(error);
      setHasError(true);
    }
  }


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

    const fetchOrders = async () => {
      try {
        const response = await fetch(urlApi + "/getOrders", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        let data = await response.json();

        // Filtra las órdenes por el estado 2
        data = data.filter(order => order.status === 2 || order.status === 3 || order.status === 4);

        setOrders(data);
      } catch (error) {
        console.log(error);
        setHasError(true);
      }
    };

    fetchOrders();
  }, [aauth, role, token]);

  if (!Array.isArray(orders)) {
    window.location.href = "/not-found";
    return;
  }


  
  


  const closeModal = () => {
    setIsModalOpen(false);
  };

  const acceptOrder = () => {
    fetch(urlApi + "/updateOrderById/" + selectedOrder._id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({ status: 3 }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        setSelectedOrder({ ...selectedOrder, status: 3 });
      } else {
        if (data.message) {
          console.error('Error updating order:', data.message);
        } else {
          console.error('Error updating order: No error message received');
        }
      }
    })
    .catch((error) => {
      console.error('Error:', error); 
    });

    closeModal();
  };

  const cancelOrder = () => {
    fetch(urlApi + "/updateOrderById/" + selectedOrder._id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({ status: 4 }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        setSelectedOrder({ ...selectedOrder, status: 4 });
      } else {
        if (data.message) {
          console.error('Error updating order:', data.message);
        } else {
          console.error('Error updating order: No error message received');
        }
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    closeModal();
  };

  
  const askQuestion = () => {
    alert(`Número de teléfono del cliente: ${selectedOrder.client.phone}`);
    closeModal();
  };
  function getColorClass(status) {
    switch (status) {
      case 2:
        return "bg-yellow-300";
      case 3:
        return "bg-green-300";
      case 4:
        return "bg-red-300";
      default:
        return "";
    }
  }
  function getStatusText(status) {
    switch (status) {
      case 2:
        return "Pendiente";
      case 3:
        return "Aceptado";
      case 4:
        return "Cancelado";
      default:
        return "";
    }
  }
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 mb-16">
      {orders.map((order, index) => (
        <div
          key={index}
          className={`grid grid-cols-1 gap-2 border-2 border-gray-300 p-4 mb-4 rounded-lg shadow-md cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-105 ${getColorClass(
            order.status
          )}`}
          onClick={() => openModal(order)}
        >
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
            {order.name}
          </h2>
          <p className="text-gray-600">{order.details}</p>
          <p className="font-medium text-gray-700">Total: {order.total}</p>
          <p className="text-blue-600">Estado: {getStatusText(order.status)}</p>
        </div>
      ))}
      {selectedOrder && (
        <Transition appear show={isModalOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={closeModal}
          >
            <div className="min-h-screen px-4 text-center">
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>

              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg md:text-xl font-medium leading-6 text-gray-900"
                >
                  <div className="flex flex-col items-center justify-center">
                    <h1 className="text-2xl font-bold mb-4">Cliente</h1>
                    {selectedOrder && selectedOrder.client ? (
                      <p className="text-xl">{` ${selectedOrder.client.name} ${selectedOrder.client.last_names}`}</p>
                    ) : (
                      <p className="text-xl">Loading...</p>
                    )}

                    <div className="border-t w-full my-4 bg-black "></div>
                  </div>
                </Dialog.Title>

                <div className="mt-2">
                  <div className="mt-2 bg-gray-100 p-4 rounded shadow">
                    {selectedOrder &&
                    selectedOrder.products &&
                    selectedOrder.products.length > 0 ? (
                      selectedOrder.products.map((product, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center border-b border-gray-200 py-2"
                        >
                          <span className="text-xl font-semibold">
                            {product.product.name}
                          </span>
                          <span className="text-lg">{`Cantidad: ${product.quantity}`}</span>
                        </div>
                      ))
                    ) : (
                      <p className="text-xl">No products</p>
                    )}
                  </div>
                  <div className="mt-2 p-4 bg-blue-200 rounded shadow text-left w-3/6 ml-auto">
                    {selectedOrder && selectedOrder.total ? (
                      <p className="text-2xl font-bold">{`Total: ${selectedOrder.total} Bs.`}</p>
                    ) : (
                      <p className="text-xl">Loading...</p>
                    )}
                  </div>
                </div>

                <div className="mt-4 space-x-4 flex flex-wrap justify-center">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 w-full sm:w-auto"
                    onClick={acceptOrder}
                  >
                    Aceptar orden
                  </button>
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded shadow w-full sm:w-auto mt-4 sm:mt-0"
                    onClick={cancelOrder}
                  >
                    Cancelar orden
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500 w-full sm:w-auto mt-4 sm:mt-0"
                    onClick={askQuestion}
                  >
                    Preguntar
                  </button>
                  
                </div>
              </div>
            </div>
          </Dialog>
        </Transition>
      )}
    </div>
  );
};

export default OrderList;
