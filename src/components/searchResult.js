import React, { PureComponent } from 'react';
import BookShelf from "./booksShelf"
class SearchResult extends React.Component {
    constructor(props) {
        super(props);

    }


    render() { 
 //       console.log(fectedData());
        return (
            <div>
                <div className="search-books-results">
                  
                        <BookShelf />
                    
                </div>
            </div>
          );
    }
}
 
export default SearchResult;