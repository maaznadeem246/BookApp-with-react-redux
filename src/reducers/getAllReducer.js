import {  GET_ALL_BOOKS,UPDATED_BOOKS } from "../constants/constants"

function getAllReducers(state = {
    allbooks: [],
    updatedbooks:{},

}, actions) {

    switch (actions.type) {
        case GET_ALL_BOOKS:
            state = Object.assign({},state, { allbooks: actions.books,booksStatus:actions.booksStatus })
            //console.log(actions)
            return state;
        case UPDATED_BOOKS:
            //console.log(actions.updatedbooks)
            state = Object.assign({}, state, { updatedbooks: actions.updatedbooks, booksStatus: actions.booksStatus})
            return state;
        default:
            return state;
    }
}


export default getAllReducers;