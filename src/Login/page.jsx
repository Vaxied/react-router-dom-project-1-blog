import React from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../auth/useAuth'
import { Navigate } from 'react-router-dom'

function Login() {
    const auth = useAuth()
    const navigate = useNavigate()
    const [username, setUsername] = React.useState('')

    function login() {
        event.preventDefault()
        auth.login({ username })
        console.log(username)
        navigate('/profile')
    }

    if (auth.user) return <Navigate to="/profile" />
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={login}>
                <label htmlFor="username">Enter username: </label>
                <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default Login
