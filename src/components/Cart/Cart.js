import React from 'react';


const Cart = (props) => {
    const {cart} = props;
    console.log(props)
    // console.log(cart)

    //first step
    let totalQuantity = 0;
    let total = 0;
    for(const product of cart){
        if(!product.quantity){
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
   
    //second step
    // const total =cart.reduce((previous , Product)=> previous + Product.price ,0);
    //third step
    // const totalReducer = (previous, product)=>previous+product.price;
    // const total = cart.reduce(totalReducer, 0);

    const shipping =total > 0? 15 : 0;
   
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;
    return (
        <div>
             <h3>Order Summary</h3>
               <h5>Items Ordered: {totalQuantity} </h5>
               <br />
               <p>Total : {total.toFixed(2)}</p>
               <p>Shipping: {shipping}</p>
               <p>Tax: {tax.toFixed(2)}</p>
               <p>GrandTotal: {grandTotal.toFixed(2)}</p>
               {
                   props.children
               }
        </div>
    );
};

export default Cart;