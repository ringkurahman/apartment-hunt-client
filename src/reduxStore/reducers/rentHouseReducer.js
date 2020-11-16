import { apartment_request, get_apartment_success, get_apartment_failed } from '../types'


const initialState = {
    loading: false,
    apartments: [],
    error: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case apartment_request:
            return {
                ...state,
                loading: true
            }
        
        case get_apartment_success:
            return {
                ...state,
                loading: false,
                apartments: action.payload
            }
        
        case get_apartment_failed:
            return {
                ...state,
                loading: false,
                apartments: [],
                error: action.payload
            }
        
        default:
            return state
    }
}