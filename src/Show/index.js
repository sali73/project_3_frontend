import React from 'react'
import '../style.css'
import AddToCart from '../AddToCart';

function Show(props) {
    const product = props.location.aboutProps;
    console.log(props.location)
    return (
        <>
          <head>
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@300&family=Prata&display=swap" rel="stylesheet"/>
        </head>
            <div className='jumbotron-fluid ' style={{textAlign:'center',fontFamily: 'Barlow Semi Condensed'}}>
                <div style={{display:'flex' , paddingTop:"5vh" , justifyContent:'center' }}>   
                    <div className="view overlay zoom">
                        <img src={product.image} className="img-fluid " alt="smaple image" style={{height:'50vh'}}/>      
                    </div>
                    <div style={{ paddingTop:'30px' , textAlign:'left' , paddingLeft:'20px'}}>
                        <h3 style={{lineHeight:'1.6', fontSize:"4vh"}}>{product.name}</h3>
                        <h4 style={{lineHeight:'1.6'}}> ${product.price}</h4>
                        <h5 style={{lineHeight:'1.6'}}>left-in-stock: {product.quantity}</h5><br/>
                        <button type="button" class="btn btn-secondary ">ADD TO CART</button>
                    </div>
                </div>
                <div style={{borderStyle: 'groove' , margin:'20px 180px', fontSize:"3vh"}}><h5>Product Details:</h5><p style={{}}>{product.description}</p></div>
            </div>  
        </>
    )
}
export default Show
