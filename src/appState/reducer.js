
const initialState = {
    user: {
        username: 'Example User'
    }
}

function reducer(state = initialState, action) {
    switch (action?.type) {

        default:
            return {
                ...state
            }
    }
}

export { initialState }
export default reducer
