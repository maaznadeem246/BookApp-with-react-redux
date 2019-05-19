import React, { PureComponent } from 'react';
import '../App.css'
import {Link} from "react-router-dom"
import { SearchBooks } from "../actions/actions"
import { connect } from 'react-redux'



class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nval:""
        }
    }



    render(){
        const onnC = (d) => {
            this.setState({ nval: d.target.value })
            this.props.dispatch(SearchBooks(d.target.value))
        
        }
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input type="text" value={this.state.nval} name='searchinput' onChange={(d)=>{onnC(d)}} placeholder="Search by title or author" />

                    </div>
                </div>

            </div>
        )
    }
}

export default connect(state => ({}))(SearchBar);