import React from 'react'
import { postContext } from './postContext'
import { actionTypes } from '../reducer'
// import { reducer, initialState } from '../reducer'

function useLocalStorage(itemName, initialValue) {
    // console.log('BEGINNING OF LOCALSTORAGE')
    const [item, setItem] = React.useState(initialValue)
    const { state, dispatch } = React.useContext(postContext)
    React.useEffect(() => {
        try {
            const posts = localStorage.getItem(itemName)
            // console.log(posts)
            console.log('LOCALSTORAGE USE EFFECT')
            let parsedItem
            if (!posts) {
                localStorage.setItem(itemName, JSON.stringify(initialValue))
                parsedItem = initialValue
            } else {
                parsedItem = JSON.parse(posts)
            }
            setItem(parsedItem)
            console.log('GUARDANDO POSTS', posts)
            onSuccess()
        } catch (err) {
            throw new Error(err)
        }
    }, [state.update])

    const onSuccess = () => dispatch({ type: actionTypes.success })
    const saveItem = (newItem) => {
        console.log('IM SAVING')
        const stringifiedItem = JSON.stringify(newItem)
        console.log('saving post inside the saveitem')
        localStorage.setItem(itemName, stringifiedItem)
    }

    // console.log('🚀 ~ useLocalStorage ~  AL FINAL item:', item)

    return {
        item,
        saveItem,
    }
}

export default useLocalStorage
