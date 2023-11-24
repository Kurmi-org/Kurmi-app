'use client';
import '../app/global.css';

import React from 'react';
import { useState, useEffect } from 'react';
import urlApi from '@/config/globals_api';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";




const RegisterProducer = () => {
    const [name, setName] = useState('');
    const [last_names, setLast_names] = useState('');
    const [ci, setCi] = useState('');
    const [date_birth, setDate_birth] = useState(''); 
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirm_password] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');  
    const [departament, setDepartment] = useState('');
    const [province, setProvince] = useState('');
    const [address, setAddress] = useState('');

    const [token, setToken] = useState(null);
    const [role, setRole] = useState(null);
    const [aauth, setAuth] = useState(true);

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

  


    const position = [-17.7833, -63.1667];
    const [markerPosition, setMarkerPosition] = useState(null);

    const houseIcon = L.icon({
      iconUrl: "/agricultor.png",
      iconSize: [25, 25],
    });

    const Markers = () => {
      useMapEvents({
        click: (e) => {
          setMarkerPosition(e.latlng);
        },
      });

      return markerPosition === null ? null : (
        <Marker position={markerPosition} icon={houseIcon} />
      );
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (password !== confirm_password) {
        console.log("Las contraseñas no coinciden");
        return;
      }
      const data = {
        name,
        last_names,
        ci,
        user,
        password,
        date_birth,
        departament,
        province,
        address,
        longitude: markerPosition.lng,
        latitude: markerPosition.lat,
        phone,
        email
      };
      try{
        const response = await fetch(`${urlApi}/registerProducer`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"), //localStorage.getItem("token")
          },
          body: JSON.stringify(data),
        });
        
        if(response.ok){
          setName('');
          setLast_names('');
          setCi('');
          setDate_birth('');
          setUser('');
          setPassword('');
          setConfirm_password('');
          setEmail('');
          setPhone('');
          setDepartment('');
          setProvince('');
          setAddress('');
          setMarkerPosition(null);
          alert("Agricultor registrado correctamente");
        }else{
          const errorData = await response.json();
          alert(`error: ${errorData.message}`)
        }
        const json = await response.json();
        console.log(json);

      }catch(error){
        console.log(error);
      }
    }


    return (
      <>
        <form className="m-16" onSubmit={handleSubmit}>
          <div className="max-w-[1080px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 ">
            <div className="col-span-1 md:col-span-1 m-4">
              <label
                htmlFor="name"
                className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >
                Nombres
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium"
                placeholder="nombre completo"
                required
              />
              <label
                htmlFor="last_names"
                className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >
                Apellidos
              </label>
              <input
                type="text"
                id="last_names"
                name="last_names"
                value={last_names}
                onChange={(e) => setLast_names(e.target.value)}
                className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium"
                placeholder="apellidos"
                required
              />
              <label
                htmlFor="ci"
                className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >
                Carnet de identidad
              </label>
              <input
                type="text"
                id="ci"
                name="ci"
                value={ci}
                onChange={(e) => setCi(e.target.value)}
                className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium"
                placeholder="ci"
                required
              />
              <label
                htmlFor="date_birth"
                className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >
                Fecha de nacimiento
              </label>
              <input
                type="date"
                id="date_birth"
                name="date_birth"
                value={date_birth}
                onChange={(e) => setDate_birth(e.target.value)}
                max={
                  new Date(
                    new Date().setFullYear(new Date().getFullYear() - 10)
                  )
                    .toISOString()
                    .split("T")[0]
                }
                className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium"
                required
              />
              <label
                htmlFor="phone"
                className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >
                Teléfono
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium"
                placeholder="teléfono"
                required
              />
            </div>
            <div className="col-span-1 md:col-span-1 m-4">
              <label
                htmlFor="user"
                className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >
                Usuario
              </label>
              <input
                type="text"
                id="user"
                name="user"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium"
                placeholder="usuario"
                required
              />

              <label
                htmlFor="password"
                className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium"
                placeholder="contraseña"
                required
              />

              <label
                htmlFor="confirm_password"
                className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >
                Confirmar Contraseña
              </label>
              <input
                type="password"
                id="confirm_password"
                name="confirm_password"
                value={confirm_password}
                onChange={(e) => setConfirm_password(e.target.value)}
                className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium"
                placeholder="confirmar contraseña"
                required
              />

              {password !== confirm_password && (
                <p className="text-red-500">Las contraseñas no coinciden</p>
              )}

              <label
                htmlFor="email"
                className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium"
                placeholder="email"
                required
              />
              <label
                htmlFor="address"
                className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >
                Dirección
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium"
                placeholder="dirección"
                required
              />
            </div>
            <div className="col-span-1 md:col-span-2 md:col-start-3 m-4 ">
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="flex-1">
                  <label
                    htmlFor="department"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Departamento
                  </label>
                  <input
                    type="text"
                    id="department"
                    name="department"
                    value={departament}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium"
                    placeholder="departamento"
                    required
                  />
                </div>

                <div className="flex-1">
                  <label
                    htmlFor="province"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Provincia
                  </label>
                  <input
                    type="text"
                    id="province"
                    name="province"
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                    className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium"
                    placeholder="provincia"
                    required
                  />
                </div>
              </div>

              <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  
                />
                <Markers />
              </MapContainer>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-colors duration-200 transform bg-slate-600 rounded-lg hover:bg-slate-500 focus:bg-slate-500"
            >
              Registrar
            </button>
          </div>
        </form>
      </>
    );
}
export default RegisterProducer;
