import React from 'react';
const Footer = () =>{
    
    
    return(
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <div style={{ backgroundColor:'lightgrey', display:"grid",paddingTop:"3vh" , gridTemplateColumns:'33% 33% 33%' , justifyItems:'center'}} >
          
            <div><img style={{height:'100px'}} src='https://trello-attachments.s3.amazonaws.com/5ede57555674e50a6d53b5b8/5ee19ed8ed7850157b41932f/0e6b17cc59fe88678fcf91d1625eb05a/2.png' alt=""></img></div>
            {/* <div>
                <h6 style={{color:'#303030'}}> SEARCH</h6>
                <input type='text' className='input' placeholder='Search' class="form-control"></input>
            </div> */}
         
            <div >
                <ul style={{listStyle:'none'}}>
                    <li><a style={{color:'#303030'}}href='/shop'>Become a Sales Partner</a></li>
                    <li><a style={{color:'#303030'}} href='/shop'> Careers </a></li>
                    <li><a style={{color:'#303030'}} href='/shop'>Terms & Conditions</a></li>
                    <li><a style={{color:'#303030'}} href='/shop'>Privacy Policy</a></li>
                </ul>
            </div>
            <div style={{textAlign:"center"}}>
                <h6 style={{color:'#303030'}}> FOLLOW US</h6>
                <div style={{display: "flex",justifyContent:"space-evenly"}}>
                <a href="https://www.twitter.com/" style={{fontSize:"4vh", color:"black", textDecoration:"none", marginRight:"1vh"}}>
                    <i className="fa fa-twitter" />
                </a>
                <a style={{fontSize:"4vh", color:"black", textDecoration:"none", marginRight:"1vh"}} href="https://www.instagram.com/">
                <i className="fa fa-instagram" />
                </a>
                <a style={{fontSize:"4vh", color:"black", textDecoration:"none"}} href="https://www.facebook.com/">
                    <i className="fa fa-facebook"></i>
                </a>
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer;