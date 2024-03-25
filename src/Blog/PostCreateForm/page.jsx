import React from 'react'
import './index.css'
import usePost from '../usePosts'
import { useNavigate } from 'react-router-dom'

const initialForm = {
    slug: '',
    title: '',
    content: '',
    author: '',
}

function PostCreateForm() {
    const { dispatch, actionTypes, createPost } = usePost()
    // const [state, dispatch] = React.useReducer(reducer, initialState)
    const [formState, setFormState] = React.useState(initialForm)
    // const [title, setTitle] = React.useState('')
    // const [content, setContent] = React.useState('')
    // const [author, setAuthor] = React.useState('')
    const newPost = formState
    const navigate = useNavigate()

    // const [slug, setSlug] = React.useState('')
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
    // }, [title, content, postCopy, blogpost])

    const { title, slug, content, author } = formState
    console.log(newPost)
    const handleTitleChange = (value) => {
        setFormState({
            ...formState,
            title: value,
            slug: updateSlug(value),
        })
    }
    const handleContentChange = (value) => {
        setFormState({
            ...formState,
            content: value,
        })
    }

    const handleAuthorChange = (value) => {
        setFormState({
            ...formState,
            author: value,
        })
    }
    const cancelCreating = () => {
        // event.preventDefault()
        dispatch({ type: actionTypes.success })
        navigate('/blog')
    }
    const updateSlug = (title) => {
        console.log('replacing slug')
        const slug = title.replaceAll(' ', '-').toLowerCase()
        return slug
    }

    return (
        <>
            <form
                onSubmit={() => createPost(newPost)}
                className="post-create-form"
            >
                <p className="post-slug" type="text">
                    {`slug: ${slug ? slug : 'here goes slug'}`}
                </p>
                <label>Title</label>
                <input
                    className="post-title"
                    type="text"
                    value={title}
                    onChange={(event) => handleTitleChange(event.target.value)}
                    maxLength={40}
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
                <label>Author</label>
                <input
                    className="post-author"
                    type="text"
                    value={author}
                    onChange={(event) => handleAuthorChange(event.target.value)}
                />
                <button type="submit">Confirm</button>
                <button type="button" onClick={cancelCreating}>
                    Cancel
                </button>
            </form>
        </>
    )
}

export default PostCreateForm
