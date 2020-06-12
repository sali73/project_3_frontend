import React from 'react';
import AddToCart from '../AddToCart';

function Show(props) {
    const product = props.location.aboutProps;
    console.log(props.location)
    return (
        <>
            <div className='jumbotron-fluid ' style={{textAlign:'center'}}>
            {/* <h1>Show Product:</h1> */}
            <div><h2 style={{}}>{product.name}</h2></div>
            <img src={product.image} alt="..." style={{width:'350px'}}/>
            <h4>price${product.price}</h4>
            <h5>Q:{product.quantity}</h5>
            <AddToCart product={product}/>

            <h5>Product Details:<p>{product.description}</p></h5>
            
            </div>  
            
        </>
    )
}
export default Show
