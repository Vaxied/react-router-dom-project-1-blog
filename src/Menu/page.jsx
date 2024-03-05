import useAuth from '../auth/useAuth'
import routes from '../routes'
import { NavLink } from 'react-router-dom'

function Menu() {
    const auth = useAuth()

    return (
        <nav>
            <ul>
                {routes.map((route) => {
                    if (route.publicOnly && auth.user) return null
                    if (route.private && !auth.user) return null

                    return (
                        <li key={route.id}>
                            <NavLink
                                style={({ isActive }) => ({
                                    color: isActive ? 'red' : 'blue',
                                })}
                                to={route.to}
                            >
                                {route.text}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Menu
