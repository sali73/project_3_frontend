import React from 'react';
import { Link } from 'react-router-dom';
import AddToCart from '../AddToCart';

const Shop = ({ cartSize, setCartSize }) => {
  
    const [products, setProducts] = React.useState(null);
        
    
    //Function to get products from API
    const getInfo = async () => {
        const response = await fetch('https://seir-reactivity.herokuapp.com/products');
        const result = await response.json();
        console.log('products:', result);
        setProducts(result);
    };
    
    // Run on initial render
    React.useEffect(()=>{
        getInfo()
    }, []);

    // delete function
    const handleDelete = async (id) => {
        const response = await fetch(`https://seir-reactivity.herokuapp.com/products/${id}`, {
            method: 'DELETE',
        });
        getInfo();
        console.log(response)
    };
    
     
    return  (
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
           
            <Link style={{paddingLeft:"2vh"}}to="/new">Add Product</Link>
            {/*This is just a placeholder for filters, they dont work but I thought that atleast we could keep them to add on to later, also just like the look of having it*/}
            <div className="filters-content" style={{display:"flex", flexDirection:"row", marginTop:"4vh"}}>
            <div className="filters" style={{width:"20%",heigth:"40%", paddingLeft:"2vh"}}>
                <h4 style={{borderTop:"solid grey", paddingTop:"2vh"}}>Filter by Color</h4>
                <label for="red"> Red</label>
                <input style={{ marginLeft:"1vh"}} type="checkbox" id="red"  value="color"/><br />
                <label for="tan"> Tan</label>
                <input style={{ marginLeft:"1vh"}} type="checkbox" id="tan"  value="color"/><br />
                <label for="black"> Black</label>
                <input style={{ marginLeft:"1vh"}} type="checkbox" id="black"  value="color" /><br />
                <h4 style={{borderTop:"solid grey", paddingTop:"2vh", marginTop:"2vh"}}>Filter by Name</h4>
                <label for="tote"> Tote</label>
                <input style={{ marginLeft:"1vh"}} type="checkbox" id="tote"  value="name"/><br />
                <label for="purse"> Purse</label>
                <input style={{ marginLeft:"1vh"}} type="checkbox" id="purse"  value="name"/><br />
                <label for="shopping bag">Handbag</label>
                <input style={{ marginLeft:"1vh"}} type="checkbox" id="shopping bag"  value="name"/><br />
                
            </div>
            <div id="Content" style={{display: "flex", flexWrap: "wrap", flexDirection: "row", paddingLeft: "8vh"}}>
                
                {products
                    ? products.map((product) => {
                        
                          return (
                            <div key={product._id} className="card .d-flex" style={{width: "30%",height:"30%", border:"none",fontFamily: 'Barlow Semi Condensed'}}>
                                <Link to={{
                                    pathname: `/show/${product._id}`,
                                    aboutProps: {
                                        ...product
                                    }
                                }}>
                                    <img src={product.image} className="card-img-top" alt="..." />
                                </Link>
                                <div className="card-body">
                                    <span style={{marginRight: "8vh", fontSize: "3.5vh"}} className="card-title">{product.name}</span><span style={{fontSize:"2.5vh"}}
                                     className="card-title">${product.price}</span>
                                    <p className="card-text" style={{fontSize:"2vh"}}>{product.description}</p>
                                    <AddToCart product={product} cartSize={cartSize} setCartSize={setCartSize} />
                                    <button className="btn btn-light" onClick={() => {handleDelete(product._id)}}>X</button>
                                    <Link to={{
                                        pathname: `/edit/${product._id}`,
                                        aboutProps: {
                                            ...product
                                        }
                                    }}>Edit</Link>
                                </div>
                            </div>
                        );
                    })
                    : 'LOADING...'}
                    
            </div>
            </div>
            
        </>
    )
};

export default Shop;