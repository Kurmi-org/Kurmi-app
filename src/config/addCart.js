export const arr_prod_card = [] 

export const productsCart = async (product, quantity) => {
    arr_prod_card.push({'product': product, 'quantity': quantity})
}
