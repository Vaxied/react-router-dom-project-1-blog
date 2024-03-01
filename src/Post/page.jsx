import { useNavigate, useParams } from 'react-router-dom'
import { blogdata } from '../Blog/blogdata'

function Post() {
    const navigate = useNavigate()
    const { slug } = useParams()
    const blogpost = blogdata.find((post) => slug === post.slug)
    // console.log(blogpost)

    function returnToBlog() {
        navigate('/blog')
    }
    return (
        <>
            <h2>{blogpost.title}</h2>
            <p>{blogpost.content}</p>
            <p>{blogpost.author}</p>
            <button onClick={returnToBlog}>Back to Blog List</button>
        </>
    )
}

export default Post
