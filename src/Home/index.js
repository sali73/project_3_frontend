import React from 'react'
import { Link } from 'react-router-dom';

function Home () {
    return (
        <>
        {/* <div style={{display:"flex", justifyContent:"space-around"}}>
        <div className="jumbotron" style={{backgroundImage:"url('https://trello-attachments.s3.amazonaws.com/5ee19ed8ed7850157b41932f/1000x667/6ae3e0ece0053aeb7f79bcfef49f7645/33.jpg')", height:"60vh" ,width:"120vh", textAlign:"end", fontWeight:"bolder", backgroundRepeat:"no-repeat",backgroundPosition:"center", color:"lightgrey", backgroundSize:"cover"}}>
        <h1 className="display-4" style={{fontSize:"10vh", fontFamily:"Abril Fatface"}}>App Name</h1>
        <p className="lead" style={{fontSize:"3vh"}}>Shop our latest styles of designer handbags</p>
        <hr className="my-4"/>
        <Link style={{backgroundColor:" rgba(150,192,230,0.4)"}}className="btn btn-light btn-lg" to="/shop">Shop</Link>
        </div>
        </div> */}
        <div className="jumbotron jumbotron-fluid" style={{backgroundImage: "linear-gradient(whitesmoke, grey)", color: "whitesmoke", textAlign: "right", margin:"0", height:"25vh"} }>
            <div className="container">
                 <h1 className="display-4" style={{fontSize:"10vh", fontFamily:"Abril Fatface"}}>App Name</h1>
                 <p className="lead" style={{fontSize:"3vh"}}>Shop our latest styles of designer handbags</p>
            </div>
            </div>
                <div style={{display:"flex",justifyContent:"space-around"}}>
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src="https://trello-attachments.s3.amazonaws.com/5ede57555674e50a6d53b5b8/5ee19ed8ed7850157b41932f/7691ef6c6f2896705fc54cdd14a33107/33.jpg" className="d-block w-100" alt=""/>
                        <div className="carousel-caption d-none d-md-block">
                        <Link style={{backgroundColor:" rgba(150,192,230,0.4)"}}className="btn btn-light btn-lg" to="/shop">Shop</Link>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src="https://trello-attachments.s3.amazonaws.com/5ede57555674e50a6d53b5b8/5ee19ed8ed7850157b41932f/5e418d32f0c1d8e0332c73026c7c58d4/31.jpg" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                        <Link style={{backgroundColor:" rgba(150,192,230,0.4)"}}className="btn btn-light btn-lg" to="/shop">Shop</Link>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src="https://trello-attachments.s3.amazonaws.com/5ede57555674e50a6d53b5b8/5ee19ed8ed7850157b41932f/ff285dfe41bddaf0f948f16593be5efd/30.jpg" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                        <Link style={{backgroundColor:" rgba(150,192,230,0.4)"}}className="btn btn-light btn-lg" to="/shop">Shop</Link>
                        </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="/shop" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="/shop" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                    </div>
                    </div>
                    
        </>
    )
}

export default Home 
