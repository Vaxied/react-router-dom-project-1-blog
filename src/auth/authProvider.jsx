import React from 'react'
import PropTypes from 'prop-types'
import users from './users'
import roles from './roles'
import { useLocation, useNavigate } from 'react-router-dom'

export const AuthContext = React.createContext()

function AuthProvider({ children }) {
    AuthProvider.propTypes = {
        children: PropTypes.object,
    }
    const [user, setUser] = React.useState(null)
    const navigate = useNavigate()

    const location = useLocation()
    // console.log(location)
    let from = location?.state?.from.pathname || -1
    // console.log(from)

    const onLogin = ({ username }) => {
        // setUser({ username })

        const registeredUser = users.find((name) => name.name === username)
        if (registeredUser) setUser(registeredUser)
        else setUser({ name: username, role: roles.guest })
        navigate(from, { replace: true })
    }

    const onLogout = () => {
        setUser(null)
    }

    const auth = { user, onLogin, onLogout }
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export default AuthProvider
