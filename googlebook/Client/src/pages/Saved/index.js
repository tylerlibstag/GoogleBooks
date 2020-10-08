import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API from "../../utils/API" ;

function SavedPage(props) {

    const [bookSave, setBooks] = useState([])
    
    useEffect(() => {
      loadBooks()
    }, [])
  
    function deleteBook(id) {
        API.deleteBook(id)
          .then(res => loadBooks())
          .catch(err => console.log(err));
    }

    function loadBooks() {
      API.getBooks()
        .then(res =>
          setBooks(res.data)
        )
        .catch(err => console.log(err));
    };
  
    
    
    return (
        <div className="container">
           
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                            Saved
                        </div>
                        <h1 className="card-body">
                            {bookSave.map((book, index) => <div key={index} index={index} buttonText="Remove" buttonClicked={deleteBook} book={book}/>)}
                        </h1>
                    </div>
                </div>
           
        </div>
    );
}
    
export default SavedPage;