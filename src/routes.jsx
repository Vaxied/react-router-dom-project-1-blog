const routes = []

routes.push({
    id: 1,
    to: '/',
    text: 'Home',
    private: false,
})
routes.push({
    id: 2,
    to: '/blog',
    text: 'Blog',
    private: false,
})
routes.push({
    id: 3,
    to: '/profile',
    text: 'Profile',
    private: true,
})
routes.push({
    id: 4,
    to: '/login',
    text: 'Login',
    private: false,
    publicOnly: true,
})
routes.push({
    id: 5,
    to: '/logout',
    text: 'Logout',
    private: true,
})

export default routes
