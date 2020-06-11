import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import UserContext from '../App/UserContext';

function AuthNav() {
    const { userData, setUserData } = useContext(UserContext);
    // console.log(userData)
    let username = ''
    if (userData.user) {
        username = userData.user.username;
    }
    function handleLogout() {
        setUserData({
            token: undefined,
            user: undefined,
          })
        localStorage.setItem('auth-token', '');
    }
    return (
        <span className="AuthNav">
            {username ? 
                <h5><button className="btn btn-warning" onClick={handleLogout}>Logout</button>{username}</h5>
                : (
                <>
                    <Link to="/login" className="btn btn-success">Login</Link>
                    <Link to="/signup" className="btn btn-primary">Sign Up</Link>    
                </>
                )}            
        </span>
    )
}

export default AuthNav
