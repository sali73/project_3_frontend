import React from 'react'

function Show(props) {
    const product = props.location.aboutProps;
    console.log(props.location)
    return (
        <>
           <head>
           <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet"></link>
           </head>
            <div className='jumbotron-fluid ' style={{textAlign:'center',fontFamily:"Abril Fatface"}}>
            {/* <h1>Show Product:</h1> */}
            <div style={{fontSize:"10vh"}}><h2>{product.name}</h2></div>
            <img src={product.image} alt="..." style={{width:'300px'}} />
            <h4 style={{fontSize:"4vh"}}>${product.price}</h4>
            <h5 style={{fontSize:"3.5vh"}}>Quantity:{product.quantity}</h5>
            <button type="button" class="btn btn-primary">ADD TO CART</button>

            <div style={{borderStyle: 'groove' , margin:'20px 180px', fontSize:"3vh"}}><h5>Product Details:</h5><p style={{fontFamily:'aril'}}>{product.description}</p></div>
            
            </div>  
            
        </>
    )
}
export default Show
