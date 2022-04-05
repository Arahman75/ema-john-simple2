import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './Product.css';
import Rating from 'react-rating';

const Product = (props) => {
    const {name, img, seller, price, stock,star} =props.product;
    // console.log(props)
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='product'>
            <div>
            <img src={img} alt="" />
            </div>
            <div>
            <h4 className='product-name'>Name: {name}</h4>
            <p><small>by: {seller}</small></p>
            <p>Price: {price}</p>
            <p><small>Only {stock} left in stock. Order soon...</small></p>
          <Rating
           initialRating={star}
          
          readonly
        //   emptySymbol="fa fa-star-o fa-2x"
        //   fullSymbol="fa fa-star fa-2x"
          ></Rating>
          <br />
          <br />
            <button 
            onClick={()=>props.handleAddToCart(props.product)}
            className='btn-regular'>{element} Add to Cart</button>
            </div>
           
        </div>
    );
};

export default Product;