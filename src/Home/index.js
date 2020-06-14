import React from 'react'
import BootstrapCarousel from '../Carousel'
import '../style.css'
function Home () {
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
        <BootstrapCarousel></BootstrapCarousel>
                
        </>
    )
}

export default Home 
