import React, { Component } from 'react';
import Book from "./book"
import { connect } from 'react-redux'
import { updateBook} from "../actions/actions"


class BookShelf extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchedbooks:[],
         }
    }
    componentWillReceiveProps(props) {
    
        this.setState({
            searchedbooks: props.searchedbooks.searchedbooks,
            booksStatus: props.searchedbooks.booksStatus
        })
    }
    
    render() { 
        const onselect = (d) => {

            this.props.dispatch(updateBook(d.target.id, d.target.value))

        }
        return ( 
            <ol className="books-grid">
                {this.state.booksStatus && this.state.searchedbooks != undefined && this.state.searchedbooks.length > 0 && this.state.searchedbooks.map((b)=>(
                        <Book   
                            key={b.id}
                            id={b.id}
                            shelf="none" 
                            title={b.title != undefined ? b.title : ""} 
                            authors={b.authors != undefined ? b.authors : ""} 
                            image={b.imageLinks != undefined ? b.imageLinks.smallThumbnail : ""} 
                            onselect={onselect} 
                        />
                ))
                }
          </ol>
          );
    }
}
 
export default connect(state => ({
    searchedbooks: state.searchedbooks,
 }))(BookShelf);