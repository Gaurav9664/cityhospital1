import * as Actiontypes from '../ActionTypes'

export const addToCart = (id) => (dispatch) => {
    dispatch({type: Actiontypes.ADD_TO_CART, payload:{pid: id, qty: 1}})
}

export const incrementCart = (id) => (dispatch) => {
    dispatch({type: Actiontypes.INC_CART, payload:id})
}

export const decrementCart = (id) => (dispatch) => {
    dispatch({type: Actiontypes.DEC_CART, payload:id})
}