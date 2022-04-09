export const addToCart = (count) => {
    return (dispatch) => {
        dispatch({
            type: 'add',
            payload: count
        })
    }
}

export const removeFromCart = (count) => {
    return (dispatch) => {
        dispatch({
            type: 'remove',
            payload: count
        })
    }
}