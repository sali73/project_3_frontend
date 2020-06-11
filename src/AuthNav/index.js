import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import UserContext from '../App/UserContext';

function AuthNav() {
    const { userData, setUserData } = useContext(UserContext);
    console.log(userData)
    const [username, setUsername] = useState('');
    const [cartSize, setCartSize] = useState(0);

    useEffect(() => {
        if (userData.user) {
            setUsername(userData.user.username)
            setCartSize(userData.user.cart.length)
        }
    }, [userData.user])

    function handleLogout() {
        setUserData({
            token: undefined,
            user: undefined,
            cart: undefined,
        })
        localStorage.setItem('auth-token', '');
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
