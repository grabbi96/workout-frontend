import {combineReducers} from 'redux'
import authReducer from './authReducer'
import metaReducer from './metaReducer'
import errorReducer from './errorReducer'
import cateReducer from "./categoryReducer"
const rootReducer = combineReducers({
    auth:authReducer,
    meta:metaReducer,
    error:errorReducer,
    cate:cateReducer
})


export default rootReducer