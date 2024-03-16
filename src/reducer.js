export function reducer(state, action) {
    console.log(state, 'beginning reducer')
    console.log(action.type)
    switch (action.type) {
        case actionTypes.loading: {
            return {
                ...state,
                loading: true,
            }
        }
        case actionTypes.error: {
            return {
                ...state,
                error: true,
            }
        }
        case actionTypes.editing: {
            console.log('ENTERING EDITING')
            return {
                ...state,
                editing: true,
                loading: false,
                error: false,
                success: false,
            }
        }
        case actionTypes.success: {
            return {
                ...state,
                loading: false,
                error: false,
                update: false,
                success: true,
            }
        }
        case actionTypes.update: {
            console.log('ENTERING UPDATED')
            return {
                ...state,
                update: true,
                editing: false,
                creating: false,
            }
        }
        case actionTypes.creating: {
            console.log('ENTERING UPDATED')
            return {
                ...state,
                creating: true,
                success: false,
            }
        }
        default: {
            console.log('returning default')
            throw new Error('unknown action type', action.type)
        }
    }
}

export const actionTypes = {
    loading: 'LOADING',
    error: 'ERROR',
    editing: 'EDITING',
    success: 'SUCCESS',
    update: 'UPDATE',
    creating: 'CREATING',
}

export const initialState = {
    loading: true,
    error: false,
    editing: false,
    update: false,
    creating: false,
    success: false,
}
