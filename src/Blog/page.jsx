import { Link, Outlet } from 'react-router-dom'
import { blogdata } from './blogdata'
import PropTypes from 'prop-types'

function Blog() {
    return (
        <>
            <h1>Blog</h1>
            <Outlet />
            <ul>
                {blogdata.map((post) => (
                    <BlogLink key={post.slug} post={post}>
                        {post.title}
                    </BlogLink>
                ))}
            </ul>
        </>
    )
}

function BlogLink({ post }) {
    BlogLink.propTypes = {
        post: PropTypes.object,
    }
    return (
        <li>
            <Link to={post.slug}>{post.title}</Link>
        </li>
    )
}

export default Blog
