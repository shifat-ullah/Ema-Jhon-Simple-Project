/* eslint-disable react/prop-types */
import './orderSammary.css'

const Ordersummary = ({cart}) => {



    let totalPrice= 0;
    let totalsiping =0;
    let quantity =0;
    for(const product of cart){
        product.quantity=product.quantity || 1;
         totalPrice= totalPrice + product.price * product.quantity;
         totalsiping = totalsiping + product.shipping * product.quantity;
         quantity= quantity + product.quantity;
    }

    const tex = totalPrice*7/100;
    const grandTotal = totalPrice + totalsiping + tex;

    
    return (
        <div className="ordersummary">
            <h1>Order summary </h1>
            <h3>Selected Items: {quantity}</h3>
            <p>Total Price: $ {totalPrice}</p>
            <p>Total Shipping Charge: $ {totalsiping}</p>
            <p>Tax: ${tex}</p>
            <p>Grand Total: ${grandTotal}</p>
        </div>
    );
};

export default Ordersummary;