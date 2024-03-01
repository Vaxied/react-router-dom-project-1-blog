/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { blogdata } from './blogdata'

function Blog() {
    return (
        <>
            <div>BlogPage</div>
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
    return (
        <li>
            <Link to={post.slug}>{post.title}</Link>
        </li>
    )
}

export default Blog
