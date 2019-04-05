import axios from 'axios'
import { SET_USER } from './actionTypes'
import {setToastMessage, loading} from "./metaActions"
import {setError} from "./errorAction"
import setAuthToken from "../utils/setAuthToken"
import {fatchAllData} from "./category"
import store from "../index"
export const login = (user, history) => dispatch => {
    dispatch(loading(true))
    axios.post("/api/auth/login", user)
    .then(result => {
        let {access_token, token_type} = result.data
        
        
        
        let token = `${token_type} ${access_token}`
        localStorage.setItem("auth_token", token)
        setAuthToken(token)
        store.dispatch(fatchAllData())
        axios.post("/api/auth/me")
            .then(user =>{
                dispatch(setUser(user.data))
                dispatch(setError())
                dispatch(loading(false))
                history.push("/profile")
            })
            .catch(error => {
                console.log(error.response)
            })
    })
    .catch(err => {
        // let {error} = err.response.data
        dispatch(loading(false))


        console.log(err)
        // dispatch(setError({errors:error}))
    })

}

export const registration = (user, history) => dispatch =>{
    dispatch(loading(true))
    axios.post("/api/auth/register", user)
        .then(() => {
            dispatch(loading(false))
            dispatch(setError())
            history.push("/login")
        })
        .catch(err => {
            let {message, errors} = err.response.data
            dispatch(setToastMessage(message))
            dispatch(setError(errors))
            dispatch(loading(false))
        })
}
export const logout = history => dispatch =>{
    dispatch(setUser())
    localStorage.removeItem("auth_token")
    history.push("/login")
}
export const setUser = user => ({
    type: SET_USER,
    payload: { user: user ? user : {} }
  });