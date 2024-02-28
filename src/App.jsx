import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Menu from './Menu/page'
import Blog from './Blog/page'
import Profile from './Profile/page'
import Home from './Home/page'
import Post from './Post/page'

// HashRouter follows the structure /#/path inserting a '#' or hash between each slash: like so.
// /#/ >>> Home
// /#/blog >>> Blog
// /#/profile >>> Profile
// /#/somethingelse >>> Not found

function App() {
    return (
        <>
            <HashRouter>
                <Menu />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<Post />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="*" element={<p>Not found</p>} />
                </Routes>
            </HashRouter>
        </>
    )
}

export default App
