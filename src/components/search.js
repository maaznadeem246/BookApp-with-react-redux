import React, { PureComponent } from 'react';
import SearchBar from "./searchBar"
import SearchResult from "./searchResult"
import { connect } from 'react-redux'
class SearchApp extends React.Component{
    constructor(props){
        super(props);
       
    }

    render(){
        return(
            <div>
            <SearchBar />
               
            <SearchResult/>
            </div>
        )
    }
}


export default SearchApp;