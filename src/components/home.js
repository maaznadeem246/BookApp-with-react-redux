import React, { Component } from 'react';
import { Link } from "react-router-dom"

import { connect } from 'react-redux'
import MainHead from "./mainHead"
import HomeBookShelf from "./homeBookShelf"
import "../App.css"
import ShelfHeading from './shelfHeading';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            books:[]
        }
    }
    componentDidMount(){
    }
    componentWillMount(props){
       // console.log(this.props);
        this.setState({
            books:props
        })
    }
    render() { 
        
        return ( 
            <div className="list-books">
                <MainHead/>
                <div className="list-books-content">
                    <HomeBookShelf/>
                </div>
                <div className="open-search">
                    
                    <Link to='/search'>Add a book</Link>
                    
                </div>
            </div>
             );
    }
}
 
export default connect(state => ({
    books:state.books
}))(Home);