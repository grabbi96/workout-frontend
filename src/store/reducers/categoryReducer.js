
import {GET_CATEGORY, GET_CONTRIBUTION } from '../actions/actionTypes'
const init = {
    contributionReducer :{},
    contributions:[]
}

const cateReducer = (store = init, action) => {


    switch(action.type){
        case GET_CATEGORY:{
            return {
                ...store,
                contributionReducer:action.payload.category
            }
        }
        case GET_CONTRIBUTION:{
            return {
                ...store,
                contributions:action.payload.contribution
            }
        }
        default:return store
    }

}

export default cateReducer