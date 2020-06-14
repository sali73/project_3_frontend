import React, { useContext } from 'react'
import UserContext from '../App/UserContext';
import axios from 'axios';
import '../style.css'
function AddToCart({ product }) {

    const { userData, setUserData } = useContext(UserContext);

    async function handleAddToCart() {
        if (userData.user) {
            const userId = userData.user._id;
            const response = await axios.post(
                'https://seir-reactivity.herokuapp.com/users/addToCart',
                {
                    userId,
                    product: product,
                },
            )
            setUserData(userData);
        }

    }
    
    return (
        <button
            onClick={handleAddToCart}
            className="AddToCart btn btn-primary"
        >
            Add to Cart
        </button>
    )
}

export default AddToCart
