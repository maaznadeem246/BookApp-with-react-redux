import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateBook, getUpdatedData } from "../actions/actions"
import '../App.css'

class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedV: props.shelf,
            id: props.id,
            title: props.title,
            authors: props.authors,
            image: props.image,           
         }
    }



componentWillReceiveProps(props){
  //  console.log(props)
}
     
    render() { 
        

        return (
        <div>
              <li >
                <div className="book">
                    <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("'+this.state.image+'")' }}></div>
                        <div className="book-shelf-changer">
                                <select id={this.state.id} key={this.state.id} defaultValue={this.state.selectedV}  onChange={(d) => this.props.onselect(d)}>
                                <option value="move"  disabled>Move to</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none" >None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{this.state.title}</div>
                    <div className="book-authors">{this.state.authors}</div>
                </div>
            </li>

        </div>
        );
    
}
}
export default connect(state => ({
    updatedbooks: state.getAllReducer.updatedbooks
}))(Book);