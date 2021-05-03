
import { ADD_BOOK, LIST_BOOKS, FILTER_BOOK } from './constants'


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

export const filterBook = (payload) => {
    return {
        type: FILTER_BOOK,
        payload
    }
}
