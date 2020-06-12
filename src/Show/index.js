import React from 'react'
// import '@fortawesome/fontawesome-free/css/all.min.css'; 
// import'bootstrap-css-only/css/bootstrap.min.css'; 
// import'mdbreact/dist/css/mdb.css';

function Show(props) {
    const product = props.location.aboutProps;
    console.log(props.location)
    return (
        <>
           <head>
           <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet"></link>
           </head>

            <div className='jumbotron-fluid ' style={{textAlign:'center',fontFamily:"Abril Fatface"}}>
                <div style={{display:'flex' , paddingTop:"5vh" , justifyContent:'center' }}>   
                    <div className="view overlay zoom">
                        <img src={product.image} className="img-fluid " alt="smaple image" style={{height:'300px'}}/>      
                    </div>
                    <div style={{ paddingTop:'30px' , textAlign:'left' , paddingLeft:'20px'}}>
                        <h3 style={{lineHeight:'1.6'}}>Product Name: {product.name}</h3>
                        <h4 style={{lineHeight:'1.6'}}>Price: ${product.price}</h4>
                        <h5 style={{lineHeight:'1.6'}}>Quantity: {product.quantity}</h5><br/>
                        <button type="button" class="btn btn-secondary btn-sm">ADD TO CART</button>
                    </div>
                </div>
                <div style={{borderStyle: 'groove' , margin:'20px 180px', fontSize:"3vh"}}><h5>Product Details:</h5><p style={{fontFamily:'aril'}}>{product.description}</p></div>
            </div>  
        </>
    )
}
export default Show
