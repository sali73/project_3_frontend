import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import UserContext from '../App/UserContext';
import Axios from 'axios';

function AuthNav({ cartSize, setCartSize }) {

    const { userData, setUserData } = useContext(UserContext);
    const [username, setUsername] = useState('');

    const getData = async () => {
        const userId = userData.user._id;
        const loggedInUser = userData.user.username;
        const cart = await Axios.get(
            `http://localhost:3001/users/cart/${userId}`
        )
        setUsername(loggedInUser)
        setCartSize(cart.data.length)
    }

    useEffect(() => {
        getData()
    }, [userData.user.cart])

    function handleLogout() {
        setUserData({
            token: undefined,
            user: undefined,
            cart: undefined,
        })
        localStorage.setItem('auth-token', '');
        setUsername('')
        setCartSize(0)
    }

    return (
        <span className="AuthNav">
            {username ?
                <>
                    <span>{username}</span>
                    <button className="btn btn-warning" onClick={handleLogout}>Logout</button>
                </>
                : (
                <>
                    <Link to="/login" className="btn btn-success">Login</Link>
                    <Link to="/signup" className="btn btn-primary">Sign Up</Link>    
                </>
                )}
                <Link to="/cart" className="btn btn-info">Cart</Link>
        </span>
    )
}

export default AuthNav
