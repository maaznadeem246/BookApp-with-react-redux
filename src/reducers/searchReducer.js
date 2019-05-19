import { SEARCH_RESULT, GET_BOOKS} from "../constants/constants"

function searchReducers(state = {
                        searchedbooks:[],
                        booksStatus:false
                        },actions){
    
    switch (actions.type) {
        case SEARCH_RESULT:
            state = Object.assign({}, { searchedbooks:actions.books,booksStatus:actions.booksStatus})
            return state;
        default:
            return state;
    }
}


export default searchReducers;