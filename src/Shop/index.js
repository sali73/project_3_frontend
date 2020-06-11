import React from 'react';
import { Link } from 'react-router-dom';
// import Form from './form.js'
const Shop = (props) => {
   
    const [products, setProducts] = React.useState(null);

    //Function to get products from API
    const getInfo = async () => {
        const response = await fetch('http://localhost:3001/products');
        const result = await response.json();
        console.log(result);
        setProducts(result);
    };
    
    // Run on initial render
    React.useEffect(()=>{
        getInfo()
    }, []);

    // delete function
    const handleDelete = async (id) => {
        const response = await fetch(`http://localhost:3001/products/${id}`, {
            method: 'DELETE',
        });
        getInfo();
        console.log(response)
    };
 
    return  (
        <>
            <div className="jumbotron jumbotron-fluid" style={{backgroundImage: "linear-gradient(whitesmoke, grey)", color: "whitesmoke", textAlign: "right"} }>
                <div className="container">
                    <h1 className="display-4">App Name</h1>
                    <p className="lead">Some small description of app goes here</p>
                </div>
            </div>
           
            <Link to="/new">Add Product</Link>
            {/* <Form initial={blank} handleSubmit={handleCreate} /> */}
            {/* <h1>Edit Product</h1> */}
            {/* <Form initial={editProduct} handleSubmit={handleEdit} /> */}

            <div style={{display: "flex", flexWrap: "wrap", flexDirection: "row", paddingLeft: "8vh"}}>
                {products
                    ? products.map((product) => {
                          return (
                            <div key={product._id} className="card .d-flex" style={{width: "18rem"}}>
                                <Link to={{
                                    pathname: `/show/${product._id}`,
                                    aboutProps: {
                                        ...product
                                    }
                                }}>
                                    <img src={product.image} className="card-img-top" alt="..." />
                                </Link>
                                <div className="card-body">
                                    <span style={{marginRight: "8vh", fontSize: "3vh"}} className="card-title">{product.name}</span><span className="card-title">${product.price}</span>
                                    <p className="card-text">{product.description}</p>
                                    <Link to="/shop" className="btn btn-primary">Add to Cart</Link>
                                    <button className="btn btn-dark" onClick={() => {handleDelete(product._id)}}>X</button>
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
        </>
    )
};

export default Shop;