import useAuth from '../useAuth'
import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'

function AuthRoute(props) {
    AuthRoute.propTypes = {
        children: PropTypes.object,
    }

    const auth = useAuth()

    if (!auth.user) return <Navigate to="/login" />

    return props.children
}

export default AuthRoute
