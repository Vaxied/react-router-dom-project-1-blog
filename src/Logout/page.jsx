import { useNavigate } from 'react-router-dom'
import useAuth from '../auth/useAuth'

function Logout() {
    const auth = useAuth()
    const navigate = useNavigate()

    function handleLogout() {
        auth.onLogout()
        navigate('/')
    }

    return (
        <>
            <h1>Logout</h1>
            <p>Are you sure?</p>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default Logout
