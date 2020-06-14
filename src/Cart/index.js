import React, { useEffect, useState, useContext } from 'react'
import UserContext from '../App/UserContext'

import axios from 'axios';

function Cart(props) {

    const { userData, setUserData } = useContext(UserContext);
 
    const [cart, setCart] = useState([]);
    const userId = userData.user._id
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const getCart = async () => {
            const response = await axios.get(
                `http://localhost:3001/users/cart/${userId}`
            )
            console.log('oops', response.data);
            setCart(response.data) 
        }
        getCart()
    }, [userId])

    useEffect(() => {
        const getTotal = () => {
            let cartTotal = 0
            for (let product of cart) {
                console.log(product.price)
                cartTotal += product.price;
                console.log('cart', cartTotal)
            }
            setTotal(cartTotal.toFixed(2));
        }
        getTotal()
    })

    
    // delete function
    async function handleDelete(id) {
        const response = await axios.delete(`http://localhost:3001/users/${userId}/${id}`)
        setCart(response.data)
        setUserData(userData)
    };
    

    return (
        <div className="Cart">
            <head>
            <link href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@300&family=Prata&display=swap" rel="stylesheet"/>
            </head>
            <div className="jumbotron jumbotron-fluid" style={{backgroundImage: "linear-gradient(white, grey)", color: "whitesmoke", textAlign: "right", margin:"0"} }>
            <div className="container">
                 <h1 className="display-4" style={{ fontFamily:"prata"}}>CES</h1>
                 <p className="lead" style={{ fontFamily: 'Barlow Semi Condensed', fontSize:"2rem"}}>Shop our latest styles of designer handbags</p>
            </div>
         </div>
         <div style={{ margin:'50px 500px 200px 60px'}}>
            <h2 style={{fontFamily: 'Barlow Semi Condensed', color:'red'}}>Shopping Cart</h2>
            <h3 style={{ fontFamily: 'Barlow Semi Condensed',color:'red'}}>Total: ${total}</h3>
            {cart.map((product, index) => {
                return (
                    <div key={index}>
                        <img src={product.image} alt={product.name} style={{inlineSize: '10vh', marginLeft:"2vh"}} />
                        <span style={{marginLeft:"4vh", marginRight:"4vh"}}>{product.name}</span>
                        <span>${product.price}</span>
                        <button className="btn btn-light" onClick={() => handleDelete(product._id)}>Remove from Cart</button>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Cart
