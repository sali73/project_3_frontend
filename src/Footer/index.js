import React from 'react';
const Footer = () =>{
    
    
    return(
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <div style={{ backgroundColor:'lightgrey',height:'8vh', display:"flex", justifyContent:"space-around", paddingTop:"2vh"}} >
            
                <a href="https://www.twitter.com/" className="fa fa-twitter"style={{fontSize:"4vh", color:"black", textDecoration:"none"}}></a>
                <a className="fa fa-instagram" style={{fontSize:"4vh", color:"black", textDecoration:"none"}} href="https://www.instagram.com/"></a>
                <a className="fa fa-facebook" style={{fontSize:"4vh", color:"black", textDecoration:"none"}} href="https://www.facebook.com/"></a>
               
        </div>
        </>
    )
}
export default Footer;