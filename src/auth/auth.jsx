import React from 'react'
import PropTypes from 'prop-types'

export const AuthContext = React.createContext()

function AuthProvider({ children }) {
    AuthProvider.propTypes = {
        children: PropTypes.object,
    }
    const [user, setUser] = React.useState(null)

    const login = ({ username }) => {
        setUser({ username })
    }

    const logout = () => {
        setUser(null)
    }
    const auth = { user, login, logout }
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export default AuthProvider
