import urlApi from "@/config/globals_api";

export const arr_prod_sale = [];

export const getProducts = async () => {
    try {
        arr_prod_sale.length = 0
        const response = await fetch(urlApi + '/getSalesByProducer', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        arr_prod_sale.push(...data);

    } catch (error) {
        console.error('Error ->', error);
    }
}

export const arr_final = [];

export const filterdProductProducer = async () => {
    await getProducts();

    const uniqueProductIds = new Set();
    arr_final.length = 0;

    for (const produId of arr_prod_sale) {
        const product = await getProdById(produId.product);
        if (!uniqueProductIds.has(product._id)) {
            uniqueProductIds.add(product._id);
            arr_final.push({
                "product": product,
                "quantity": produId.quantity
            });
        }
    }

    console.log(arr_final);
    return arr_final;
};

const getProdById = async (id) => {
    try {
        const response = await fetch(urlApi + '/getProduct/' + id, {
            headers: {
                'Content-type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Error ->', error);
        return {}; // Devuelve un objeto vacío en caso de error
    }
}
