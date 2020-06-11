import React from 'react'

function Show(props) {
    const product = props.location.aboutProps;
    console.log(props.location)
    return (
        <>
            <div className='jumbotron-fluid ' style={{textAlign:'center'}}>
            {/* <h1>Show Product:</h1> */}
            <div><h2>{product.name}</h2></div>
            <img src={product.image} alt="..." style={{width:'350px'}}/>
            <h4>${product.price}</h4>
            <h5>Q:{product.quantity}</h5>
            <button type="button" class="btn btn-secondary btn-sm">ADD TO CART</button>

            <h5>Product Details:<p>{product.description}</p></h5>
            
            </div>  
            
        </>
    )
}
export default Show
