import React from 'react'
import { AuthContext } from './authProvider'

function useAuth() {
    const auth = React.useContext(AuthContext)
    return auth
}

export default useAuth
