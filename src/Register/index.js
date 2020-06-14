import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom'; 
import axios from 'axios';
import UserContext from '../App/UserContext.js';
import '../style.css'
function Register() {

    // state
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setUserData } = useContext(UserContext);
    const [isRegistered, setIsRegistered] = useState(false);

    // register
    async function handleRegister(event) {
        event.preventDefault()
        try {
            const user = {
                username,
                password,
            }
            const response = await axios.post(
                'https://seir-reactivity.herokuapp.com/users/',
                JSON.stringify(user),
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                },
            )
            setUserData({
                token: response.data.token,
                user: response.data.user,
            });
            localStorage.setItem('auth-token', response.data.token);
            setIsRegistered(true);
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="Login" style={{ margin:'50px 500px 200px 60px'}}>
            <form onSubmit={handleRegister} className="form-group">
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    autoComplete="username"
                    className="form-control"                    value={username}
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
                {isRegistered ?
                    <Redirect to="/shop" /> 
                    : ''}
            </form>
        </div>
    )
}

export default Register;