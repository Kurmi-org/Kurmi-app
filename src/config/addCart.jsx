import urlApi from "@/config/globals_api";
import { productionBrowserSourceMaps } from "../../next.config";

export const arr_prod_card = []

//agrega el producto y la cantidad al array arr_prod_cart y luego actualiza o crea la orden con estado 1
export const addArrProductsCart = async (product, quantity) => {
    arr_prod_card.push({ 'product': product, 'quantity': quantity })
}

export const removeProductFromCart = (productToRemove) => {
    const index = arr_prod_card.findIndex((product) => product.product.id === productToRemove.id);
    if (index > -1) {
        arr_prod_card.splice(index, 1);
    }
};

export const createOrder = async () => {
    const response = await fetch(urlApi + '/createOrder/', {
        method: 'POST',
        body: JSON.stringify({
            "price": 0,
            "total": arr_prod_card.reduce((total, item) => total + (item.product.price * item.quantity), 0),
            "products": arr_prod_card,
            // "client": localStorage.getItem('id'),
            "status": 2
        }),
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-type': 'application/json'
        }
    });
    if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
    } else {
        window.location.reload()
    }
    return await response.json();
    arr_prod_card.length = 0
}

export const updateOrder = async (id) => {
    const response = await fetch(urlApi + '/updateOrderById/' + id, {
        method: 'PUT',
        body: JSON.stringify({
            "price": 0,
            "total": arr_prod_card.reduce((total, item) => total + (item.product.price * item.quantity), 0),
            "products": arr_prod_card,
            "client": localStorage.getItem('id')
        }),
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-type': 'application/json'
        }
    });
    if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
    }
    return await response.json();
}

//actualiza el stock
export const updateStock = async (id, quantity) => {
    try {
        const response = await fetch(urlApi + '/updateProduct/' + id, {
            method: 'PUT',
            body: JSON.stringify({ "quantity": quantity }),
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
        }
        return await response.json();
    } catch (e) {
        console.log('Error en upadate stock ', e)
        throw e
    }
}

var isCreated = false
var idOrder

export const getProductCart = async () => {
    arr_prod_card.length = 0
    await fetch(urlApi + '/getOrdersByStatus/1')
        .then(res => res.json())
        .then(data => arr_prod_card.push(...data.products))
        .catch(error => console.error('Error ->', error))
}

