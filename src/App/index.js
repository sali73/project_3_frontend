import React from "react";
//import "./css/style.css";
import Form from "./form.js";

const App = (props) => {
  
  // State to hold the products
  //////////////////////////////
  const [Products, setProducts] = React.useState(null);
 
 // State to hold the edit products
 //////////////////////////////////
  const [editProducts, setEditProducts] = React.useState({
    name: '',
    description: '',
    image: '',
    price: '',
    quantity: ''
  });

  // Products blank form data
  ////////////////////////////
  const blank = {
    name: '',
    description: '',
    image: '',
    price: '',
    quantity: ''
  }

  // Hook to get the products when the component loads
  /////////////////////////////////////////////////////
  React.useEffect(() => {
    getInfo();
  }, []);

  // Get the products from the API
  /////////////////////////////////
  const getInfo = async () => {
    const response = await fetch('http://localhost:3001/products');
    const result = await response.json();
    console.log(result);
    setProducts(result);
  };
  
  // create new products
  ///////////////////////////////
  const handleCreate = async (data) => {
    const response = await fetch('http://localhost:3001/products', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    getInfo(); 
  };

  // delete products
  ///////////////////////////////
  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:3001/products/${id}`, {
      method: "DELETE",
    });
    getInfo(); 
  };

  //edit to products
  ///////////////////
  const handleSelect = async (Products) => {
    setEditProducts(Products);
  };

  const handleEdit = async (data) => {
    const response = await fetch(`http://localhost:3001/products/${data._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    console.log(data);
    getInfo();
  };



  return (
    <div className='container-fluid'>
    <div className = 'grid'>
    <header><h1>Products</h1></header>
    <nav>
      <h4>Add a products</h4>
      <Form className='form' initial={blank} handleSubmit={handleCreate}></Form>
    </nav> 
    <article>
      <h4>Edit products</h4>
      <Form className='form'  initial={editProducts} handleSubmit={handleEdit} />
    </article>
    <main className='container-fluid main'>
      <ul>
        {Products
          ? Products.map((products) => {
            return (
              <li key={products._id}>
                <a href={products.name}><h5>{products.image}</h5></a>
                
                 <button class="btn btn-link" onClick={() => {handleDelete(products._id);}}>
                  X
                </button> 
                <button class="btn btn-link" onClick={() => {handleSelect(products)}}>
                  E
                </button> 
              </li>
            );
          })
          : "Loading..."
        }
      </ul>
      </main>
      <footer><h4>copyright </h4></footer>
    </div>
    </div>
  );
}

export default App;
