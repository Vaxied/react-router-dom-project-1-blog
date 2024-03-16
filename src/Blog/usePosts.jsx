import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import useLocalStorage from './useLocalStorage'
import { blogdata } from './blogdata'
import { postContext } from './postContext'

function usePost() {
    const { state, dispatch, actionTypes } = React.useContext(postContext)
    console.log(state)
    let initialValue
    //if nothing in localStorage, repopulate with blogdata
    if (!localStorage.getItem('POSTS')) {
        initialValue = blogdata
    } else {
        initialValue = []
    }
    const { item: posts, saveItem: savePosts } = useLocalStorage(
        'POSTS',
        initialValue
    )

    //Create a standlalone reducer to manage state between components
    const navigate = useNavigate()

    const { slug } = useParams()
    const blogpost = posts.find((post) => post.slug === slug)
    const deletePost = () => {
        const updatedPosts = posts.filter((post) => post !== blogpost)
        savePosts(updatedPosts)
        onUpdate()
        navigate('/blog')
    }

    const SaveEditedPost = (editedPost) => {
        event.preventDefault()
        console.log(editedPost, 'saving edited post')
        const blogpostIndex = posts.findIndex((post) => post.slug === slug)
        posts[blogpostIndex] = editedPost
        savePosts(posts)
        onUpdate()
        navigate('/blog')
    }

    const createPost = (newPost) => {
        console.log('HERE SAVING NEWLY CREATED POST')
        event.preventDefault()
        console.log('creating post', newPost)
        posts.push(newPost)
        savePosts(posts)
        onUpdate()
        navigate('/blog')
    }
    const onUpdate = () => {
        dispatch({ type: actionTypes.update })
    }
    const onEditing = () => {
        dispatch({ type: actionTypes.editing })
        // navigate(`/blog/${blogpost.slug}`)
    }
    const onCreating = () => {
        dispatch({ type: actionTypes.creating })
    }

    return {
        state,
        dispatch,
        actionTypes,
        posts,
        blogpost,
        deletePost,
        SaveEditedPost,
        createPost,
        onEditing,
        onCreating,
        slug,
    }
}

export default usePost
