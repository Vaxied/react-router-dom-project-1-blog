import { useNavigate } from 'react-router-dom'
// import { blogdata } from '../Blog/blogdata'
import useAuth from '../../auth/useAuth'
import usePost from '../usePosts'
import PostEditForm from '../PostEditForm/page'

function Post() {
    const auth = useAuth()
    const navigate = useNavigate()
    const { state, blogpost, deletePost, onEditing } = usePost()
    if (!blogpost) return
    if (!state) return
    console.log('🚀 ~ Post ~ blogpost:', blogpost)
    // const { slug } = useParams()
    // const blogpost = blogdata.find((post) => slug === post.slug)

    function returnToBlog() {
        navigate('/blog')
    }
    // const index = blogdata.findIndex((post) => slug === post.slug)

    const canDelete = () =>
        auth.user?.role.permissions.delete ||
        auth.user?.name === blogpost.author

    const canEdit = () =>
        auth.user?.role.permissions.update ||
        auth.user?.name === blogpost.author

    if (!blogpost) return null
    if (!state.editing)
        return (
            <>
                <button onClick={returnToBlog}>Back to Blog List</button>
                <h2>{blogpost.title}</h2>
                <p>{blogpost.content}</p>
                <p>{blogpost.author}</p>
                {canDelete() && (
                    <button onClick={deletePost}>Delete blogpost</button>
                )}
                {canEdit() && <button onClick={onEditing}>Edit Post</button>}
            </>
        )
    if (state.editing) return <PostEditForm />
}

export default Post
