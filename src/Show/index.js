import React from 'react'
import { Link } from 'react-router-dom';
import '../style.css';
import AddToCart from '../AddToCart';

function Show(props) {
    const product = props.location.aboutProps;
    return (
        <>
          <head>
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@300&family=Prata&display=swap" rel="stylesheet"/>
        </head>
            <div className='jumbotron-fluid ' style={{textAlign:'center',fontFamily: 'Barlow Semi Condensed'}}>
                <div style={{display:'flex' , paddingTop:"5vh" , justifyContent:'center' }}>
                    <div className="view overlay zoom">
                        <img src={product.image} className="img-fluid" alt="sample" style={{height:'300px'}}/>
                    </div>
                    <div style={{ paddingTop:'30px' , textAlign:'left' , paddingLeft:'20px'}}>
                        <h3 style={{lineHeight:'1.6'}}> {product.name}</h3>
                        <h4 style={{lineHeight:'1.6'}}>${product.price}</h4>
                        <h5 style={{lineHeight:'1.6'}}>Quantity: {product.quantity}</h5><br/>
                        <AddToCart product={product} />
                    </div>
                </div>
                <div style={{borderStyle: 'groove' , margin:'20px 180px', fontSize:"3vh"}}><h5>Product Details:</h5><p>{product.description}</p>
                </div>
            
                <button type="button" class="btn btn-primary" style={{ marginBottom:'30px'}}>
                    <Link style={{color:'white', textDecoration:'none'}} to='/shop'>Go Back</Link> 
                </button>
            </div>  
        </>
    )
}
export default Show
