import React, { Component } from 'react';
import ShelfHeading from "./shelfHeading"
import { connect } from 'react-redux'
import Book from "./book"
import "../App.css"
import { updateBook,getAllBooks } from "../actions/actions"



class HomeBookShelf extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            allBooks:[],
            shelf:[
                { shelfname: "currentlyReading",
                    shelfvalue: "Currently Reading"  
                },
                {
                    shelfname: "wantToRead",
                    shelfvalue: "want To Read"
                },
                {
                    shelfname: "read",
                    shelfvalue: "Read"
                }                
                ],
            booksStatus: false 
         }
    }
    componentDidMount(){
        this.props.dispatch(getAllBooks())
        
    }

    componentWillReceiveProps(props){
       // console.log(props.allbooks)

         this.setState({
             allBooks: props.allbooks,
             booksStatus: props.booksStatus
         })

    }
    render() { 
       // console.log(this.state.booksStatus);
        const onselect = (d) => {

            this.props.dispatch(updateBook(d.target.id, d.target.value))

        }
        return ( 
            <div>
                { this.state.shelf.map((b,index)=>(
                <div key={index} className="bookshelf">
                    <ShelfHeading heading={b.shelfvalue} />
                    <div className="bookshelf-books">
                        <div className="bookshelf-books">
                        {!this.state.booksStatus ?
                            <ol className="books-grid">
                                {this.state.allBooks.map((book)=>(
                                    <div key={book.id}>
                                        {book.shelf === b.shelfname &&
                                            <Book   
                                                key={book.id}
                                                id={book.id} 
                                                shelf={book.shelf} 
                                                title={book.title != undefined ? book.title : ""} 
                                                authors={book.authors != undefined ? book.authors : ""} 
                                                image={book.imageLinks != undefined ? book.imageLinks.smallThumbnail : ""}
                                                onselect={onselect} 
                                            />
                                        }
                                    </div>
                                ))}
                            </ol>
                            :
                            <div>Loading</div>
                        }
                        </div>
                    </div>
                </div>
                )
                )
                }
            </div>
         );
    }
}
 
export default connect(state => ({
    allbooks: state.getAllReducer.allbooks,
    booksStatus: state.getAllReducer.booksStatus
}))(HomeBookShelf);