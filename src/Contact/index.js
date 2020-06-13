import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <head>
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@300&family=Prata&display=swap" rel="stylesheet"/>
        </head>
    
         <div className="jumbotron jumbotron-fluid" style={{backgroundImage: "linear-gradient(white, grey)", color: "whitesmoke", textAlign: "right", margin:"0", height:"25vh"} }>
            <div className="container">
                 <h1 className="display-4" style={{fontSize:"10vh", fontFamily:"prata"}}>CES</h1>
                 <p className="lead" style={{fontSize:"3vh", fontFamily: 'Barlow Semi Condensed'}}>Shop our latest styles of designer handbags</p>
            </div>
         </div>
         <div className="jumbotron">
        <main>
        <h5>CONTACT US</h5>
        <p style={{fontSize:'2vh'}}>Find us on social media by clicking on our Instagram, Facebook, or Twitter.</p>
        
        <a href="https://www.twitter.com/" style={{fontSize:"4vh", color:"black", textDecoration:"none", marginRight:"4vh"}}><i className="fa fa-twitter"></i></a>
        <a style={{fontSize:"4vh", color:"black", textDecoration:"none", marginRight:"4vh"}} href="https://www.instagram.com/"><i className="fa fa-instagram"></i></a>
        <a style={{fontSize:"4vh", color:"black", textDecoration:"none", marginRight:"4vh"}} href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a>
        
        <h5 style={{paddingTop:"2vh"}}>Have Questions About Our Products? </h5>
        <p style={{fontSize:'1.5vh'}}>Call us at 888-888-8888 | Email us at shop@gmail.com</p>
        
        <h5>Return Policy</h5>
        <p style={{fontSize:'1.5vh'}}>We accept returns. You can return unopened items in the original packaging within 30 days of your purchase with receipt or proof of purchase. If 30 days or more have passed since your purchase, we cannot offer you a refund or an exchange.

        Upon receipt of the returned item, we will fully examine it and notify you via email, within a reasonable period of time, whether you are entitled to a return. If you are entitled to a return, we will refund your purchase price and a credit will automatically be applied to your original method of payment.

        Only regular priced items may be refunded. Sale items are non-refundable.</p>
        </main>
        <aside></aside>
      </div>

      </div>
    )
  }
}
export default Contact;