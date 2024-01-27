import { getShoppingCart } from "../utilities/fakedb";

const CardProductsLoaders=async()=>{
    const loadedProduct = await fetch('products.json');
    const products = await loadedProduct.json();
    // console.log(products)

    const stroedCart = getShoppingCart();
    const savedCart = []; 
    // console.log(savedCart)

    for (const id in stroedCart){
        // console.log(id)
        const addedProduct = products.find(product => product.id === id);
        if(addedProduct){
            const quantity = stroedCart[id];
            // console.log(quantity)
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct)
        }
    }
    return savedCart;

}

export default CardProductsLoaders ;