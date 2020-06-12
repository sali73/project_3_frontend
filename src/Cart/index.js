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
            <h2>Shopping Cart</h2>
            <h3>Total: ${total}</h3>
            {cart.map((product, index) => {
                return (
                    <div key={index}>
                        <img src={product.image} alt={product.name} style={{inlineSize: '8rem'}} />
                        <h3>{product.name}</h3>
                        <h5>${product.price}</h5>
                        <button onClick={() => handleDelete(product._id)}>Remove from Cart</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Cart
