import React from 'react'

function Show(props) {

    const product = props.location.aboutProps;
  

  
    return (
        <>
            <div className='jumbotron '>
                  {/* <h1>Show Product:</h1> */}
            <header><h2 style={{marginLeft:'20px' , marginTop:'10px'}}>Product name:{product.name}</h2></header>
            <main style={{marginLeft:'20px'}}>
            <img src={product.image} alt="..." style={{width:'350px'}}/>
            <h4>Price :{product.price}</h4>
            <h5>Quantity:{product.quantity}</h5>
            <h5>Product Details:<h6>{product.description}</h6></h5>
            </main>
           
            </div>
          
            
            
        </>
    )
}

export default Show