import React from 'react';
import './style.css';

// import Form from './form.js'
const Shop = (props) => {
   
    const [products, setProducts] = React.useState(null);
    const [editProduct, setEditProduct] = React.useState({
        name: '',
        description: '',
        image: '',
        price: 0,
        quantity: 0
    });
    
    const blank = {
        name: '',
        description: '',
        image: '',
        price: 0,
        quantity: 0
    };
    //Function to get products from API
    const getInfo = async () => {
        const response = await fetch('http://localhost:3001/products', {
            
        });
        const result = await response.json();
        console.log(result);
        setProducts(result);
    };
    
    React.useEffect(()=>{
        getInfo()
    }, []) 


    const handleCreate = async (data) => {
        const response = await fetch('http://localhost:3001/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(data),
        });
        getInfo(); 
    };

    const handleDelete = async (id) => {
        const response = await fetch(`http://localhost:3001/products/${id}`, {
            method: 'DELETE',
           
        });
       
        getInfo();
    };
  
    const handleSelect = async (product) => {
        setEditProduct(product);
    };
    const handleEdit = async (data) => {
        const response = await fetch(
            `http://localhost:3001/products/${data._id}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'  
                },
                body: JSON.stringify(data),
            }
        );
        getInfo();
    };
 
    return  (
        <>
            <div className="jumbotron jumbotron-fluid" style={{backgroundImage: "linear-gradient(whitesmoke, grey)", color: "whitesmoke", textAlign: "right"} }>
            <div className="container">
                <h1 className="display-4">App Name</h1>
                <p className="lead">Some small description of app goes here</p>
            </div>
            </div>
           
              
               
            <h1>Add Product</h1>
            {/* <Form initial={blank} handleSubmit={handleCreate} /> */}
            <h1>Edit Product</h1>
            {/* <Form initial={editProduct} handleSubmit={handleEdit} /> */}
            <div style={{display: "flex", flexWrap: "wrap", flexDirection: "row", paddingLeft: "8vh"}}>
                {products
                    ? products.map((product) => {
                          return (
                            <div key={product._id} className="card .d-flex" style={{width: "18rem"}}>
                            <img src={product.image} className="card-img-top" alt="..."/>
                            <div className="card-body">
                              <span style={{marginRight: "20vh", fontSize: "4vh"}} className="card-title">{product.name}</span><span className="card-title">${product.price}</span> 
                              <p className="card-text">{product.description}</p>
                              <a href="#" className="btn btn-primary">Add to Cart</a>
                              <button className="btn btn-dark" onClick={() => {
                               handleDelete(product._id)
                           }}>X</button>
                            </div>

                          </div>
                             
                          );
                      })
                    : 'LOADING...'}
            </div>
            
        </>
    ) 
};
export default Shop;