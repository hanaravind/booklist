import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBooks } from '../reducer/middleware'
import Search from './search'

function Card() {
    const books = useSelector(state => {
        return state.data
    })    

    const [list, setList] = useState(books)

   

    const filterList = (name) => {
        if(name.trim() === '' || name === undefined) {
            return setList(books)
        } else {
          const filtered = list.filter(data => {
            if (data.volumeInfo.title.toLowerCase().includes(name.toLowerCase())) {
              return data
            }
          })
          setList(filtered)
        }
    }
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchBooks())
    }, [])
    
    return (
        <div>
             <Search filterChange={filterList}/>
             <h4>All Books</h4>
             <div className="list-card-container">
                {books.map((book, index) => {
                    return (<div className="list-books-container" key={index}>
                    <ul className="list-card">
                        <li className="book-title">{book.volumeInfo.title}</li>
                        <li className="book-author">Authors: {book.volumeInfo.authors[0]}</li>
                        <li className="book-publisher">publisher: {book.volumeInfo.publisher}</li>
                        <li className="book-published-date">Published Date: {book.volumeInfo.publishedDate}</li>
                    </ul>
                </div>)
                })}
             </div>
        </div>
    )
}

export default Card
