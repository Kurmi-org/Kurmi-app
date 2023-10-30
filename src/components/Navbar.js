"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  let [openMenu, setOpenMenu] = useState(false);
  let [openSearch, setOpenSearch] = useState(false);

  return (
    <nav className="bg-green-700 sticky top-0 ">
      <div className="md:flex relative md:justify-around">
        <div className="p-4 flex justify-between">
          {/* menu button */}
          <div
            onClick={() => setOpenMenu(!openMenu)}
            className="cursor-pointer md:hidden"
          >
            <svg
              className="stroke-1 hover:stroke-2"
              xmlns="http://www.w3.org/2000/svg"
              height="1.8em"
              viewBox="0 0 448 512"
            >
              <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
            </svg>
          </div>

          {/* Name and Logo Kurmi */}
          <Link href="/">
            <span className="text-2xl font-bold dark:text-white">KURMI</span>
          </Link>

          {/* search button */}
          <div
            onClick={() => setOpenSearch(!openSearch)}
            className="cursor-pointer md:hidden"
          >
            <svg
              className="stroke-1 hover:stroke-2"
              xmlns="http://www.w3.org/2000/svg"
              height="1.8em"
              viewBox="0 0 512 512"
            >
              <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
            </svg>
          </div>
        </div>

        {/* Menu Links nav */}
        <div
          className={`bg-green-700 flex flex-col
      items-center text-white text-lg md:flex-row
      ${openMenu ? "hidden" : ""}`}
        >
          <Link href="/" className="p-2 hover:text-yellow-400">
            Home
          </Link>
          <Link href="#" className="p-2 hover:text-yellow-400">
            Sobre Nosotros
          </Link>
          <Link href="/orderlist/client" className="p-2 hover:text-yellow-400">
            Mis Ordenes
          </Link>
          <Link href="/cart" className="p-2 hover:text-yellow-400 flex space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
              className="mt-1"
            >
              <path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z" />
            </svg>
            <p>Carrito</p>
          </Link>
          <Link href="/productor_sign" className="p-2 hover:text-yellow-400">
            Registrar Productor
          </Link>
          <Link href="/login" className="p-2 hover:text-yellow-400">
            Iniciar sesión
          </Link>
          <Link href="/user_sign" className="p-2 hover:text-yellow-400">
            Registrarse
          </Link>
        </div>
      </div>

      {/* search spacing */}
      <div
        className={`flex flex-col
      items-center p-5 ${openSearch ? "hidden" : ""}`}
      >
       <div className="flex flex-row">
       <input
          type="text"
          className="rounded-full opacity-70 h-8 w-56 p-4 md:w-96"
          placeholder="que estas buscando..."
        />
        <div>
        <svg
              className="stroke-1 hover:stroke-2 mt-1 mx-2"
              xmlns="http://www.w3.org/2000/svg"
              height="1.2em"
              viewBox="0 0 512 512"
            >
              <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
            </svg>
        </div>
       </div>
      </div>
    </nav>
  );
}