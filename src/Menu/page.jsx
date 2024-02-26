import routes from '../routes'
import { NavLink } from 'react-router-dom'

function Menu() {
    return (
        <nav>
            <ul>
                {routes.map((route) => (
                    <li key={route.index}>
                        <NavLink
                            style={({ isActive }) => ({
                                color: isActive ? 'red' : 'blue',
                            })}
                            to={route.to}
                        >
                            {route.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Menu
