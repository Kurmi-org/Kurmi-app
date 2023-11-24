'use client'
import urlApi from '@/config/globals_api'
import { useState, useEffect } from 'react'
import {arr_prod_card, removeProductFromCart} from '@/config/addCart'

export default function CartProduct(props) {
    
    const [cartProducts, setCartProducts] = useState([...arr_prod_card]);
    const [token, setToken] = useState(null);
    const [role, setRole] = useState(null);
    const [aauth, setAuth] = useState(true);

    useEffect(() => {

        setToken(localStorage.getItem('token'));
        setRole(localStorage.getItem('role'));

        const auth = () => {
            if (token && (role === 'producer' || role === 'client')) {
                setAuth(true);
            }
            else {
                setAuth(false);
            }
        }
        if (aauth === false) {
            window.history.back();
            return;
        }


      const updateCart = () => {
        setCartProducts([...arr_prod_card]);
      };
      window.addEventListener('cartChanged', updateCart);
      return () => {
        window.removeEventListener('cartChanged', updateCart);
      };
    }, [aauth, role, token]);

    const handleRemove = (product) => {
        removeProductFromCart(product);
        window.dispatchEvent(new Event('cartChanged'));
    };

    return (
        <div className="table w-full rounded-lg shadow-2xl shadow-lime-900/50">
            <div className="table-header-group">
                <div className="table-row font-bold ">
                    <div className="table-cell text-left p-3">Producto</div>
                    <div className="table-cell text-left p-3 text-center">Cantidad</div>
                    <div className="table-cell text-left p-3 text-center">Precio unitario</div>
                    <div className="table-cell text-left p-3 text-center">Precio Total</div>
                    <div className="table-cell text-left"></div>
                </div>
            </div>
            <div className="table-row-group">
                {cartProducts.map((product, index) => (
                    <div className="table-row" key={product.product.id}>
                    <div className="table-cell p-3 bg-lime-200">{product.product.name}</div>
                    <div className="table-cell p-3 text-center">{product.quantity} u.</div>
                    <div className="table-cell p-3 text-center">BS. {product.product.price}.00</div>
                    <div className="table-cell p-3 text-center bg-lime-200">Bs. {product.product.price * product.quantity}.00</div>
                    <div className="table-cell p-1 cursor-pointer" onClick={() => handleRemove(product.product)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"/></svg>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}