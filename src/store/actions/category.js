import { GET_CATEGORY, GET_CONTRIBUTION } from "./actionTypes"
import Axios from "axios"
import {setUser} from "./authAction"
import axios from 'axios'
export const getCategory = () => dispatch => {
    Axios.post("/api/members/get-categories").then(cate =>{
        dispatch({type:GET_CATEGORY, payload:{category:cate.data}})
    })
    .catch(err =>{
        console.log(err)
    })
}

export const addContribution = (data, history) => dispatch =>{
    console.log(axios.defaults.headers.common['Authorization'])
    Axios.post("/api/members/contributions", data)
    .then(data => {
        dispatch(fatchAllData())

        history.push("/contribution")
    })
    .catch(err => {
        console.log(err)
    })
}

export const getContribution = () => dispatch => {
    console.log("called")
    Axios.get("/api/members/contributions")
    .then(data => {
      console.log(data)
        dispatch({type:GET_CONTRIBUTION, payload:{contribution:data.data}})
    })
    .catch(err => {
        console.log(err)
    })
}

export const deleteContribution = (id) => dispatch => {
  Axios.delete("/api/members/delete_contributions/"+ id)
    .then(data => {
      dispatch(fatchAllData())
    })
    .catch(err => {
        console.log(err)
    })
}

export const fatchAllData = () => dispatch =>{
    console.log(axios.defaults.headers.common['Authorization'])
    Axios.get("/api/members/contributions")
    .then(data => {
        console.log(data.data)
        dispatch({type:GET_CONTRIBUTION, payload:{contribution:data.data}})
    })
    .catch(err => {
        console.log("yes")
        console.log(err)
    })
    Axios.post("/api/members/get-categories").then(cate =>{
        dispatch({type:GET_CATEGORY, payload:{category:cate.data}})
    })
    .catch(err =>{
        console.log(err)
    })
    Axios
		.post('/api/auth/me')
		.then((user) => {
			dispatch(setUser(user.data));
		})
		.catch((error) => {
			console.log(error.response);
		});
}
