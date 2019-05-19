import { UPDATED_BOOKS,SEARCH_RESULT, GET_ALL_BOOKS} from "../constants/constants"
const api = "https://reactnd-books-api.udacity.com"


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

function getBook(boookId) {
    
}



export function SearchBooks(query){
    console.log(query)

    return (dispatch) =>{
        dispatch({
            type: SEARCH_RESULT ,
            books: [],
            booksStatus:false
        });

    fetch(`${api}/search`, {
            method: 'POST',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query })
        }).then(res => res.json())
            .then(data =>
                dispatch({
                    type:SEARCH_RESULT,
                    books:data.books,
                    booksStatus: true
                })
            )

        }

}

export function updateBook(id,shelf){
  //  console.log(id," ",shelf)
    
    return (dispatch) => {
        dispatch({
            type: GET_ALL_BOOKS,
            books: [],
            booksStatus: true
        });
    fetch(`${api}/books/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ shelf })
    }).then(res => res.json())
    .then(data => 
            dispatch(getAllBooks())
        ).catch(

        )
        
    
    }
}






export function getAllBooks(){

    return (dispatch) => {
        dispatch({
            type: GET_ALL_BOOKS,
            books: [],
            booksStatus: true
        });

        fetch(`${api}/books`, { headers })
            .then(res => res.json())
            .then(data => { 
                 dispatch({
                    type: GET_ALL_BOOKS,
                    books:data.books,
                    booksStatus: false
                }) 
            }).catch(
                
            )
    }
}
