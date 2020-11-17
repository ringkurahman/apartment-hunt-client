import { rentroom_request, get_rentroom_success, get_rentroom_failed } from '../types'


const initialState = {
    loading: false,
    rentroom: [],
    error: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case rentroom_request:
            return {
                ...state,
                loading: true
            }
        
        case get_rentroom_success:
            return {
                ...state,
                loading: false,
                rentroom: action.payload
            }
        
        case get_rentroom_failed:
            return {
                ...state,
                loading: false,
                rentroom: [],
                error: action.payload
            }
        
        default:
            return state
    }
}