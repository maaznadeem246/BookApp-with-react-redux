import { combineReducers } from 'redux'
import searchReducers from './searchReducer'
import getAllReducer from './getAllReducer'


export default combineReducers({
    searchedbooks: searchReducers,
    getAllReducer: getAllReducer
})
