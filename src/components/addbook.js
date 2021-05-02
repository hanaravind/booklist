import { FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBook } from '../reducer/action'


function Addbook({show, closeModal}) {
    const dispatch = useDispatch()
    let showModalClass = show ? 'modal-container show' : 'modal-container hide'
    const [data, setData] = useState({id: Date.now(), title: '', authors: [], publisher: '', publishedDate: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`})
    const formData = (e) => {
        e.preventDefault()
        dispatch(addBook(data))
        closeModal()
      }
    return (
        <div className={showModalClass}>
            <section className="modal-section">
                <div className="modal-main">
                <h2 className="modal-content">Add Book</h2>
                    <form onSubmit={formData} >
                        <div className="input-field-title">
                            <input type="text" placeholder="Title" className="modal-title" autoComplete="off" onChange={(e) => setData({...data, title: e.target.value})}/>
                        </div>
                        <div className="input-field-author">
                            <input type="text" placeholder="Author" className="modal-author" onChange={(e) => setData({...data, authors: [e.target.value]})}/>
                        </div>
                        <div className="input-field-publisher">
                            <input type="text" placeholder="Publisher" className="modal-publisher" onChange={(e) => setData({...data, publisher: e.target.value})}/>
                        </div>
                        <div>
                            <button className="submit-button">Add Book</button>
                        </div>
                    </form>
                    <span className="modal-closeBtn" onClick={closeModal}><FaTimes /></span>
                </div>
            </section>
        </div>
    )
}

export default Addbook

