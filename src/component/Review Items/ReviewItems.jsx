/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { RiDeleteBin6Line } from "react-icons/ri";
import './ReviewItems.css'
const ReviewItems = ({cartItems, handleRemoveCart}) => {
    const {img, name, price, shipping}=cartItems;


    return (
        <div className="cart-container">
            <img className='cart-img' src={img} alt="" />

            <div className='category'>
                <div>
                    <p className='category-pera'>{name}</p>
                    <p>Price : ${price}</p>
                    <p>Shipping Charge : ${shipping}</p>
                </div>

                <div>
                    <button onClick={()=>handleRemoveCart(cartItems.id)} className="cart-btn"><RiDeleteBin6Line className="btn-btn"></RiDeleteBin6Line></button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItems;