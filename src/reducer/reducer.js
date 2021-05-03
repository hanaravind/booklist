import { ADD_BOOK, LIST_BOOKS, FILTER_BOOK } from './constants'
import { bookList } from './initialState'

export const Reducer = (state = bookList, action) => {
    switch (action.type) {
        case LIST_BOOKS:
            return {
                ...state,
                data: action.payload
            }
        case ADD_BOOK:
            return {
                ...state,
                data: [...state.data, {volumeInfo: action.payload}]
            }
        default: 
            return state 
    }
}