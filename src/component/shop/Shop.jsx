import { useState } from 'react';
import './Shop.css'
import { useEffect } from 'react';
import ShopCard from './shop card/ShopCard';
const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="container">
            <div className="card-container">
                <h1>Shop product comming soon : {products.length} </h1>

                <div className='product-container'>
                    {
                        products.map(product => <ShopCard key={product.id} product={product}></ShopCard>)
                    }

                </div>
            </div>

            <div className="order-summary">
                <h1>Order summary</h1>
            </div>
        </div>
    );
};

export default Shop;