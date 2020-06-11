import React, { useContext } from 'react'
import UserContext from '../App/UserContext';
import axios from 'axios';

function AddToCart(props) {

    const { userData } = useContext(UserContext);

    async function handleAddToCart() {
        if (userData.user) {
            const userId = userData.user._id;
            const response = await axios.post(
                'http://localhost:3001/users/addToCart',
                {
                    userId,
                    product: props.product,
                },
            )
            console.log(response)
        }
    }
    
    return (
        <div 
            className="AddToCart btn btn-primary"
            onClick={handleAddToCart}
        >
            {props.children}
        </div>
    )
}

export default AddToCart
