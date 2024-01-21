import { useState } from 'react';
import './Shop.css'
import { useEffect } from 'react';
import ShopCard from './shop card/ShopCard';
import Ordersummary from './orderSammary/Ordersummary';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        // console.log(products)
        const storedCard = getShoppingCart();
        const savedCard =[]
        // console.log(storedCard)
        for (const id in storedCard) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCard[id];
                addedProduct.quantity = quantity
                savedCard.push(addedProduct)
            }

        }
        setCart(savedCard)
    }, [products]);

    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
        addToDb(product.id)
    }
    return (
        <div className="container">
            <div className="card-container">
                <h1>Shop product comming soon : {products.length} </h1>

                <div className='product-container'>
                    {
                        products.map(product => <ShopCard key={product.id} handleAddToCart={handleAddToCart} product={product}></ShopCard>)
                    }

                </div>
            </div>

            <div className="order-summary">
                <Ordersummary cart={cart}></Ordersummary>
            </div>
        </div>
    );
};

export default Shop;