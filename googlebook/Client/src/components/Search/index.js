import React,{useState} from 'react';
import API from '../../utils/API'
import axios from "axios";
import AddButton from '../addButton';
function Search() {
   
    var [state, setstate] = useState({
        search: "",
        results: []

    });

    var handleTyping = (e) => {

        setstate({
            ...state, search: e.target.value
        })

    }

    var handleClick = () => {
        API.search(state.search, function (data) {
            setstate({
                ...state, results: data.data.items
            })

        })
        console.log("yougot clicked")
    }
    const makeBook = (event) => {
        let bookIndex = parseInt(event.target.getAttribute('index'));
        axios.post('/api/books', setstate[bookIndex]);
    }
    console.log(state)
    return (

        <div className="App">
            <input onChange={handleTyping} />
            <button onClick={handleClick}>Search</button>
            {state.results.map(function (book) {
                return (

                    <div>
                        <h1>{book.volumeInfo.title}</h1>
                        <h1>{book.volumeInfo.author}</h1>
                        <p>{book.volumeInfo.description}</p>
                        <img src={book.volumeInfo.imageLinks.thumbnail} />
                        <a href={book.volumeInfo.infoLink}>More Info</a>
                    
                        <AddButton className="card-body">
                            {state.results.map((result, index) => <div key={index} index={index} buttonText="Add" buttonClicked={makeBook} book={result} />)}
                        </AddButton>

                       
                    </div>


                )

            })}


        </div>
    );
}
export default Search;