
import { ADD_BOOK, LIST_BOOKS } from './constants'


export const listBooks = (payload) => {
    return {
        type : LIST_BOOKS,
        payload
    }
}

export const addBook = (payload) => {
    return {
        type: ADD_BOOK,
        payload
    }
}
