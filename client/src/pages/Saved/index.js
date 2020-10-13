import React, { useEffect, useState } from 'react';
import API from "../../utils/API";
import SavedBook from '../../components/SavedBook';




function SavedPage(book) {

  const [bookSave, setBooks] = useState([])

  useEffect(() => {
    loadBooks()
  },[])

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


  console.log("this is booksave", bookSave)
  return (
    <div>
      {bookSave.length !== 0 ? (<ul>{bookSave.map(book => (
       
        <SavedBook   
        book={book}
        deleteBook={deleteBook}
        ></SavedBook>
      ))}
      </ul>) : (<h1>No saved books!</h1>
        )}
    </div>
  )
}

export default SavedPage;