import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBooks } from '../reducer/middleware'
import { filterBook } from '../reducer/action'
import Search from './search'

function Card() {
    let books = useSelector((state) => {
        return state.data
    })   
    

    const filterList = (name) => {
        if(name.trim() === '' || name === undefined) {
            console.log('empty string is', name, books)
            return books
        } else {
            // eslint-disable-next-line array-callback-return
            const filtered = books.filter(data => {
                if (data.volumeInfo.title.toLowerCase().includes(name.toLowerCase())) {
                    return data
                }
            })
                books = [...filtered]
                console.log('not empty string is',books)
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
                        {book.volumeInfo.authors.map((author, i) => <li className="book-author" key={i}>Authors: {author}</li>)}
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
