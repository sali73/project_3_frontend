import React, { useState, useContext } from 'react';
import UserContext from '../App/UserContext.js';
import '../style.css'
function Register() {

    // state
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setUserData } = useContext(UserContext);

    // register
    async function handleRegister(event) {
        event.preventDefault()
        const user = {
            username,
            password,
        }
        const response = await fetch('https://seir-reactivity.herokuapp.com/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        setUserData({
            token: response.data.token,
            user: response.data.user,
        });
        localStorage.setItem('auth-token', response.data.token);
    }

    return (
        <div className="Login" style={{ margin:'50px 500px 200px 60px'}}>
            <form onSubmit={handleRegister} className="form-group">
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    autoComplete="username"
                    className="form-control"
                    value={username}
                    onChange={event => setUsername(event.target.value)}
                />
                <label htmlFor="password">Password:</label>
                <p style={{color: '#777'}}>
                    password must be at least 6 characters and contain at least one uppercase letter, one lowercase letter, one number, and one special character
                </p>
                <input
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    className="form-control"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                /><br/>
                <button className="btn btn-success">Sign Up</button>
            </form>
        </div>
    )
}

export default Register;