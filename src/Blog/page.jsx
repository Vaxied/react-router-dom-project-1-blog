import { Link, Outlet } from 'react-router-dom'
// import { blogdata } from './blogdata'
import PropTypes from 'prop-types'
import usePost from './usePosts'
import useAuth from '../auth/useAuth'
import PostCreateForm from './PostCreateForm/page'

function Blog() {
    const { state, posts, onCreating, blogpost, slug } = usePost()
    const auth = useAuth()
    console.log(posts)
    console.log(slug)
    const canCreate = () => auth.user?.role.permissions.write || auth.user?.name
    if (!state) return
    let unSelectedPosts

    if (slug) unSelectedPosts = posts.filter((post) => post.slug !== slug)
    else unSelectedPosts = posts
    console.log(unSelectedPosts)

    return (
        <>
            <h1>Blog</h1>
            {<Outlet />}
            {!state.creating && (
                <ul>
                    {unSelectedPosts.map((post) => (
                        <BlogLink key={post.slug} post={post}>
                            {post.title}
                        </BlogLink>
                    ))}
                </ul>
            )}
            {!state.creating && canCreate() && !blogpost && (
                <button onClick={onCreating}>Create Post</button>
            )}
            {state.creating && <PostCreateForm />}
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
