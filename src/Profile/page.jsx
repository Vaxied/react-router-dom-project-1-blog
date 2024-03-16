import useAuth from '../auth/useAuth'

function Profile() {
    const auth = useAuth()
    if (!auth.user) return null
    return (
        <>
            <h1>Profile</h1>
            <h2>Welcome, {auth.user.name}</h2>
        </>
    )
}

export default Profile
