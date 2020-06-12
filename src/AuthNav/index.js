import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import UserContext from '../App/UserContext';

function AuthNav({ cartSize, setCartSize }) {

    const { userData, setUserData } = useContext(UserContext);
    const [username, setUsername] = useState('');

    async function getData() {
        if (userData.user) {
            const loggedInUser = await userData.user.username;
            const cart = await userData.user.cart;
            setUsername(loggedInUser)
            console.log(cart.length)
            setCartSize(cart.length)
        }
    }

    useEffect(() => {
        getData()
    })

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
            {cartSize > 0 ?
                <span className="btn btn-info">Cart: {cartSize}</span>
                : ''
            }           
        </span>
    )
}

export default AuthNav
