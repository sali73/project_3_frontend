import React from 'react'
import { Link } from 'react-router-dom';
function Home () {
    return (
        <>
        <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet"></link>
        <div style={{display:"flex", justifyContent:"space-around"}}>
        <div class="jumbotron" style={{backgroundImage:"url('https://trello-attachments.s3.amazonaws.com/5ee19ed8ed7850157b41932f/1000x667/6ae3e0ece0053aeb7f79bcfef49f7645/33.jpg')", height:"60vh" ,width:"120vh", textAlign:"end", fontWeight:"bolder", backgroundRepeat:"no-repeat",backgroundPosition:"center", color:"lightgrey", backgroundSize:"cover"}}>
        <h1 class="display-4" style={{fontSize:"10vh", fontFamily:"Abril Fatface"}}>App Name</h1>
        <p class="lead" style={{fontSize:"3vh"}}>Shop our latest styles of designer handbags</p>
        <hr class="my-4"/>
        <Link style={{backgroundColor:" rgba(150,192,230,0.4)"}}class="btn btn-light btn-lg" to="/shop">Shop</Link>
        </div>
        </div>
        </>
    )
}

export default Home 
