import { FaSearch } from 'react-icons/fa'

function Search (props) {
    const queryChange= (e) => {
        props.filterChange(e.target.value)
    }
    return (
        <div className="search-input-container">
            <input type="text" className="search-book-input" onChange={(e) => queryChange(e)} placeholder="search" autoComplete="off"/>
            <FaSearch />
        </div>
    )
}

export default Search
