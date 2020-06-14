import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@300&family=Prata&display=swap" rel="stylesheet"/>
        </head>
    
        <div className="jumbotron jumbotron-fluid" style={{backgroundImage: "linear-gradient(white, grey)", color: "whitesmoke", textAlign: "right", margin:"0"} }>
            <div className="container">
                 <h1 className="display-4" style={{ fontFamily:"prata"}}>CES</h1>
                 <p className="lead" style={{ fontFamily: 'Barlow Semi Condensed', fontSize:"2rem"}}>Shop our latest styles of designer handbags</p>
            </div>
         </div>
      <div className="jumbotron">
        <main>
        <h5>ABOUT US</h5>
        <p style={{fontSize:'.9rem'}}>CES STORE - THE FINEST EDIT IN LUXURY FASHION
        CES STORE is the finest edit in luxury fashion for women. We have over 250 of the best international designers, 1200 new arrivals each week, fast and reliable delivery, excellent customer service, utmost security and data protection, and free returns and exchanges within 30 days.</p>
        

        <h6>WHO WE ARE</h6>
        <p style={{fontSize:'.9rem'}}>CES STORE is an industry leader in the world of online luxury fashion and retail. For over 30 years, the highly successful CES store cemented its status in Munich as a pillar of style and taste. In 2006 it widened its customer base globally by launching a small e-commerce extension. Today, over 700 employees work together to create an unforgettable online shopping experience. What makes Mytheresa so unique? An exceptional curation of women's products from over 250 of the world’s most covetable fashion brands; exclusive designer collaborations; an outstanding customer service team made up of native speakers in multiple languages; and fast and reliable delivery to more than 140 countries across the globe.</p>

        <h6>OUR STORY</h6>
        <p style={{fontSize:'.9rem'}}>Our success story began in 2006, at the most exclusive address for designer fashion in Munich. Founded as the online extension of the high successful CES store, the first offices were situated directly above the boutique. However, it didn’t take long for the business to expand, and today over 700 employees work to create an unforgettable online luxury shopping experience. In mid-September 2014, it was announced that the CES store and CES had been bought by CES Group, forming part of an illustrious portfolio while remaining an independent subsidiary located in Munich. </p>
        </main>
        <aside></aside>
      </div>
      </>
    )
  }
}
export default About;