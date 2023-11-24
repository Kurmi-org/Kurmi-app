"use client";
import "@/app/global.css";
import urlApi from "@/config/globals_api";

import React, {useState} from "react";

const RegisterClient =()=> {
    const [name, setName] = useState('')
    const [last_names, setLast_names] = useState('')
    const [ci, setCi] = useState('')
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [confirm_password, setConfirm_password] = useState('')
    const [date_birth, setDate_birth] = useState('')
    const [departament, setDepartament] = useState('')
    const [province, setProvince] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const registerUser = async (e) => {
        //registar usuario en caso que no se regustre mostrar un popap de error en caso contrario mostrar un popup de exito
        e.preventDefault()
        const data = {
            name,
            last_names,
            ci,
            user,
            password,
            confirm_password,
            date_birth,
            departament,
            province,
            address,
            phone,
            email
        }
        console.log(data)
        const res = await fetch(urlApi + '/registerClient', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
        const json = await res.json()
        console.log(json)

        //mostart cual es error en caso de que no registre
        if (json.error) {
            alert(json.message)
        } else {
            alert("su registro fue exitoso")
            window.location.href = '/auth/login'
        }

        
           
    }

  return (
    <>
        <form onSubmit={registerUser}>
        <div class="max-w-[880px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="col-span-1 md:col-span-3 text-center mt-10">
                <h2 class="mb-5 text-gray-900 font-mono font-bold text-xl">
                    Registro de usuario
                </h2>
            </div>
            <div class="col-span-1 md:col-span-1">
                <label for="name" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Nombres
                </label>
                <input type="text" id="name" name="name" 
                    value={name} onChange={(e) => setName(e.target.value)}
                    class="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium" placeholder="nombre completo" required />
                <label for="last_names" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Apellidos
                </label>
                <input type="text" id="last_names" name="last_names" 
                    value={last_names} onChange={(e) => setLast_names(e.target.value)}
                class="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium" placeholder="apellidos" required />
                <label for="ci" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Carnet de identidad
                </label>
                <input type="text" id="ci" name="ci" 
                    value={ci} onChange={(e) => setCi(e.target.value)}
                class="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium" placeholder="ci" required />
                <label for="user" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Usuario
                </label>
                <input type="text" id="user" name="user" 
                    value={user} onChange={(e) => setUser(e.target.value)}
                class="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium" placeholder="usuario" required />
            </div>
            <div class="col-span-1 md:col-span-1">
                <label for="password" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Contraseña
                </label>
                <input type="password" id="password" name="password" 
                    value={password} onChange={(e) => setPassword(e.target.value)}
                class="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium" placeholder="contraseña" required />
                <label for="confirm_password" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Confirmar contraseña
                </label>
                <input type="password" id="confirm_password" name="confirm_password" 
                    value={confirm_password} onChange={(e) => setConfirm_password(e.target.value)}
                class="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium" placeholder="contraseña" required />
                <label for="date_birth" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Fecha de nacimiento
                </label>
                <input type="date" id="date_birth" name="date_birth" 
                    value={date_birth} onChange={(e) => setDate_birth(e.target.value)}
                class="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium" placeholder="fecha de nacimiento" required />
                <label for="departament" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Departamento
                </label>
                <select name="departament" id="departament" 
                    value={departament} onChange={(e) => setDepartament(e.target.value)}
                    class="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium" placeholder="departamento" required>
                    <option value="la paz">La Paz</option>
                    <option value="oruro">Oruro</option>
                    <option value="potosi">Potosi</option>
                    <option value="cochabamba">Cochabamba</option>
                    <option value="santa cruz">Santa Cruz</option>
                    <option value="tarija">Tarija</option>
                    <option value="chuquisaca">Chuquisaca</option>
                    <option value="beni">Beni</option>
                    <option value="pando">Pando</option>
                </select>
            </div>
            <div class="col-span-1 md:col-span-1">
                <label for="province" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Provincia
                </label>
                <input type="text" id="province" name="province" 
                    value={province} onChange={(e) => setProvince(e.target.value)}
                class="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium" placeholder="provincia" required />
                <label for="address" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Dirección
                </label>
                <input type="text" id="address" name="address" 
                    value={address} onChange={(e) => setAddress(e.target.value)}
                class="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium" placeholder="dirección" required />
                <label for="phone" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Teléfono
                </label>
                <input type="text" id="phone" name="phone" 
                    value={phone} onChange={(e) => setPhone(e.target.value)}
                class="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium" placeholder="teléfono" required />
                <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Correo electrónico
                </label>
                <input type="email" id="email" name="email" 
                    value={email} onChange={(e) => setEmail(e.target.value)}
                class="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium" placeholder="correo electrónico" required />
            </div>
            <div class="col-span-1 md:col-span-3 mb-10 text-center ">
                <button type="submit" class="bg-slate-500 hover:bg-slate-700 text-white text-base rounded-lg py-2.5 px-5 transition-colors  text-[19px]">
                    Registrar
                </button>
                <a href="/auth/login" class="text-gray-500 hover:text-gray-900 ml-5
                ">¿Ya tienes una cuenta?</a>
            </div>
        </div>
        </form>
    </>
  );
}

export default RegisterClient;