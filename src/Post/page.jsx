import { useParams } from 'react-router-dom'
import { blogdata } from '../Blog/blogdata'

function Post() {
    const { slug } = useParams()
    const blogpost = blogdata.find((post) => slug === post.slug)
    // console.log(blogpost)
    return (
        <>
            <h2>{blogpost.title}</h2>
            <p>{blogpost.content}</p>
            <p>{blogpost.author}</p>
        </>
    )
}

export default Post
