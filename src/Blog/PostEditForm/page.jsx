import './index.css'
import React from 'react'
import usePost from '../usePosts'
import useAuth from '../../auth/useAuth'
// import { useNavigate } from 'react-router-dom'

function PostEditForm() {
    const { dispatch, actionTypes, blogpost, SaveEditedPost } = usePost()
    // const [state, dispatch] = React.useReducer(reducer, initialState)

    const [title, setTitle] = React.useState('')
    const [content, setContent] = React.useState('')
    const postCopy = blogpost
    // const [slug, setSlug] = React.useState('')
    const auth = useAuth()
    // const navigate = useNavigate()
    // React.useEffect(() => {
    //     if (!blogpost) return
    //     if (!title && !content) {
    //         setTitle(blogpost.title)
    //         setContent(blogpost.content)
    //     }
    //     console.log('title and content updated')
    //     postCopy.title = title
    //     postCopy.content = content
    //     // blogpost.slug = slug
    // }, [title, content, postCopy, blogpost])

    if (!blogpost) return <>Loading...</>
    if (!auth.user) return null
    if (!title && !content) {
        setTitle(blogpost.title)
        setContent(blogpost.content)
    }

    postCopy.title = title
    postCopy.content = content

    const handleTitleChange = (value) => {
        setTitle(value)
        // postCopy.title = value
        // updateSlug(value)
    }
    const handleContentChange = (value) => {
        setContent(value)
        // postCopy.content = value
    }

    const cancelEditing = () => {
        dispatch({ type: actionTypes.success })
        // navigate('/blog')
    }
    // const updateSlug = (slug) => {
    //     console.log('replacing slug')
    //     const formattedSlug = slug.replace(' ', '-')
    //     setSlug(formattedSlug)
    // }

    return (
        <>
            <form
                onSubmit={() => SaveEditedPost(postCopy)}
                className="post-edit-form"
            >
                <label>Title</label>
                <input
                    className="post-title"
                    type="text"
                    value={title}
                    onChange={(event) => handleTitleChange(event.target.value)}
                />
                <label>Content</label>
                <textarea
                    className="post-content"
                    value={content}
                    onChange={(event) =>
                        handleContentChange(event.target.value)
                    }
                    rows={8}
                    cols={60}
                />
                <button type="submit">Confirm</button>
                <button onClick={cancelEditing}>Cancel</button>
            </form>
        </>
    )
}

export default PostEditForm
