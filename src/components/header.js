import { useState } from 'react'
import Addbook from '../components/addbook'

function Header() {
    const [showModal, setModal] = useState(false)
    
    const hideModal = () => {
        setModal(false)
    };

    return (
        <header>
            <div className="header-content">
                <h2 >Books</h2>
                <div>
                    <button onClick={()=> setModal(true)}>Create New Book</button>
                </div>
            </div>
            <Addbook show={showModal} closeModal={hideModal}/>
        </header>
    )
}

export default Header
