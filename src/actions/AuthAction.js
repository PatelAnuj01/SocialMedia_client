import * as AuthApi from '../api/AuthRequest.js'

export const login = (fromData) => async(dispatch) => {
    dispatch({type: "AUTH_START"})

    try {
        const {data} = await AuthApi.login(fromData)
        dispatch({type: "AUTH_SUCCESS", data: data})
    } catch (error) {
        console.error(error)
        dispatch({type: "AUTH_FAIL"})
    } 
}

export const signUp = (fromData) => async(dispatch) => {
    dispatch({type: "AUTH_START"})

    try {
        const {data} = await AuthApi.signUp(fromData)
        dispatch({type: "AUTH_SUCCESS", data: data})
    } catch (error) {
        console.error(error)
        dispatch({type: "AUTH_FAIL"})
    } 
}

export const logout = () => async(dispatch) => {
    dispatch({type: "LOG_OUT"})
}