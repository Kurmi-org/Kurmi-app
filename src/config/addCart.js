import urlApi from "@/config/globals_api";
import { productionBrowserSourceMaps } from "../../next.config";

export const arr_prod_card = [] 

//agrega el producto y la cantidad al array arr_prod_cart y luego actualiza o crea la orden con estado 1
export const addArrProductsCart = async (product, quantity) => {
    arr_prod_card.push({'product': product, 'quantity': quantity})
    addToCart(idOrder)
}

//actualiza el stock
export const updateStock = async (id,quantity) => {
    try{
        const response = await fetch(urlApi + '/updateProduct/' + id, {
            method: 'PUT',
            body: JSON.stringify({"quantity": quantity}),
            headers: {
                'Content-type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
        }
        return await response.json();
    }catch(e){
        console.log('Error en upadate stock ', e)
        throw e
    }
}

export const addToCart = async (id) => {
    if(isCreated){
        //update
        try{
            const response = await fetch(urlApi + '/updateOrderById/' + id, {
                method: 'PUT',
                body: JSON.stringify({
                    "price": 0,
                    "total": arr_prod_card.reduce((total, item) => total + (item.product.price * item.quantity), 0),
                    "products": arr_prod_card,

                    //!!! hay que cambiar por el id del cliente

                    "client": "653674dd4f92e79eefc24d53"
                }),
                headers: {
                    'Content-type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
            }
            return await response.json();
        }catch(e){
            console.log('Error en upadate stock ', e)
            throw e
        }
    }else{
        //create
        try{
            const response = await fetch(urlApi + '/createOrder/', {
                method: 'POST',
                body: JSON.stringify({      
                    "price": 0,
                    "total": arr_prod_card.reduce((total, item) => total + (item.product.price * item.quantity), 0),
                    "products": arr_prod_card,

                    //!!! hay que cambiar por el id del cliente
                    
                    "client": "653674dd4f92e79eefc24d53"
                }),
                headers: {
                    'Content-type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
            }
            return await response.json();
        }catch(e){
            console.log('Error en upadate stock ', e)
            throw e
        }
    }
}

var isCreated = false
var idOrder
// el estado 1 es de los productos que han sido agregados al carrito
// pero no han sido procesados
export const getProductCart = async () => {
    arr_prod_card.length = 0
    await fetch(urlApi + '/getOrdersByStatus/1')
        .then(res => res.json)
        .then(data => console.log(data))
        .catch(error => console.error('Error ->', error))
}

//{ arr_prod_card.push(...data.products)
//                         isCreated = true
//                         idOrder = data._id}
