/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './shopCard.css'

const ShopCard = ({product}) => {
    console.log(product)
    const{id, name, img, ratings,category, price}=product;
    return (
        <div className='shop-card'>
            <img className='img' src={img} alt="" />
            <div className='section-card'>
                <h1>{name}</h1>
                <p>Price : ${price}</p>
                <p>Manufacturer : {category}</p>
                <p>Ratings : {ratings}</p>
            </div>
            <button className='btn'>Add To Cart</button>
        </div>
    );
};

export default ShopCard;