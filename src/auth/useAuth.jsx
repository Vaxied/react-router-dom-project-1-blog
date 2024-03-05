import React from 'react'
import { AuthContext } from './auth'

function useAuth() {
    const auth = React.useContext(AuthContext)
    return auth
}

export default useAuth
