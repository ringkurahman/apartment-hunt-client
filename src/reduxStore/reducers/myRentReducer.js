import { myrent_request, get_myrent_success, get_myrent_failed } from '../types'


const initialState = {
    loading: false,
    rentlist: [],
    error: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case myrent_request:
            return {
                ...state,
                loading: true
            }
        
        case get_myrent_success:
            return {
                ...state,
                loading: false,
                rentlist: action.payload
            }
        
        case get_myrent_failed:
            return {
                ...state,
                loading: false,
                rentlist: [],
                error: action.payload
            }
        
        default:
            return state
    }
}