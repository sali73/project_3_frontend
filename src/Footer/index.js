import React from 'react';
const Footer = () =>{
    
    
    return(
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <div style={{ backgroundColor:'lightgrey',height:'8vh', display:"flex", justifyContent:"space-around", paddingTop:"2vh"}} >
            
                <a href="https://www.twitter.com/" style={{fontSize:"4vh", color:"black", textDecoration:"none"}}><i className="fa fa-twitter"></i></a>
                <a style={{fontSize:"4vh", color:"black", textDecoration:"none"}} href="https://www.instagram.com/"><i className="fa fa-instagram"></i></a>
                <a style={{fontSize:"4vh", color:"black", textDecoration:"none"}} href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a>
               
        </div>
        </>
    )
}
export default Footer;