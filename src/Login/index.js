import React, { useState } from 'react'

function Login() {

    // state
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // login
    async function handleLogin(event) {
        event.preventDefault()
        const user = {
            username,
            password,
        }
        console.log(user)
        const response = await fetch('http://localhost:3001/auth/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        console.log(response);
    }

    return (
        <div className="Login">
            <form onSubmit={handleLogin} className="form-group">
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
                <input
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    className="form-control"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />
                <button className="btn btn-success">Login</button>
            </form>
        </div>
    )
}

export default Login
