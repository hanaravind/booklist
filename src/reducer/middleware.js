import { BASE_API_URI } from './constants'
import axios from 'axios'
import { listBooks } from './action'

export const fetchBooks = () => async (dispatch) => {
        axios.get(BASE_API_URI).then(res => {
            console.log(res.data.items)
            dispatch(listBooks(res.data.items))
        })
    }