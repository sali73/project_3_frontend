import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import UserContext from '../App/UserContext';

function AuthNav() {
    const { userData } = useContext(UserContext);
    // console.log(userData)
    let username = ''
    if (userData.user) {
        username = userData.user.username;
    }
    return (
        <div className="AuthNav">
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <h1>{username || 'Logged Out'}</h1>
        </div>
    )
}

export default AuthNav
