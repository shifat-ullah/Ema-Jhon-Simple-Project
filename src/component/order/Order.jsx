import { useLoaderData } from "react-router-dom";
import Ordersummary from "../shop/orderSammary/Ordersummary";
import ReviewItems from "../Review Items/ReviewItems";
import { useState } from "react";
import { removeFromDb } from "../../utilities/fakedb";

const Order = () => {
    const savedCard = useLoaderData();
    const [cart, setCart]=useState(savedCard)
    

    const handleRemoveCart=(id)=>{
        // console.log(id)
        const remaining = cart.filter(product=> product.id !== id);
        setCart(remaining);
        removeFromDb(id)
    }
    
    return (
        <div className="container">
        <div className="">
            
            {
                cart.map(cartItems => <ReviewItems key={cartItems.id} handleRemoveCart={handleRemoveCart} cartItems={cartItems}></ReviewItems>)
            }

            <div className='product-container'>
               

            </div>
        </div>

        <div className="order-summary">
            <Ordersummary cart={cart}></Ordersummary>
        </div>
    </div>
    );
};

export default Order;