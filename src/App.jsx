import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Menu from './Menu/page'
import Blog from './Blog/page'
import Profile from './Profile/page'
import Home from './Home/page'
import Post from './Blog/Post/page'
import Login from './Login/page'
import Logout from './Logout/page'
import AuthProvider from './auth/authProvider'
import AuthRoute from './auth/AuthRoute/page'
import PostProvider from './Blog/postProvider'
// import PostEditForm from './Blog/PostEditForm/page'

// HashRouter follows the structure /#/path inserting a '#' or hash between each slash: like so.
// /#/ >>> Home
// /#/blog >>> Blog
// /#/profile >>> Profile
// /#/somethingelse >>> Not found

function App() {
    return (
        <>
            <HashRouter>
                <PostProvider>
                    <AuthProvider>
                        <Menu />

                        <Routes>
                            <Route path="/" element={<Home />} />

                            <Route path="/login" element={<Login />} />
                            <Route path="/blog" element={<Blog />}>
                                <Route path=":slug" element={<Post />} />
                                {/* <Route
                                path=":slug/edit"
                                element={<PostEditForm />}
                            /> */}
                            </Route>
                            <Route
                                path="/profile"
                                element={
                                    <AuthRoute>
                                        <Profile />
                                    </AuthRoute>
                                }
                            />
                            <Route
                                path="/logout"
                                element={
                                    <AuthRoute>
                                        <Logout />
                                    </AuthRoute>
                                }
                            />
                            <Route path="*" element={<p>Not found</p>} />
                        </Routes>
                    </AuthProvider>
                </PostProvider>
            </HashRouter>
        </>
    )
}

export default App
