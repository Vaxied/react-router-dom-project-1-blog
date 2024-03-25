import React from 'react'
import { reducer, actionTypes, initialState } from '../reducer'
import { postContext } from './postContext'
import PropTypes from 'prop-types'

function PostProvider({ children }) {
    PostProvider.propTypes = {
        children: PropTypes.object,
    }

    const [state, dispatch] = React.useReducer(reducer, initialState)
    console.log(state)
    return (
        <postContext.Provider value={{ state, dispatch, actionTypes }}>
            {children}
        </postContext.Provider>
    )
}

export default PostProvider
