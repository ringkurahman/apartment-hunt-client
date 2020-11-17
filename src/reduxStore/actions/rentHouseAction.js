import { apartment_request, get_apartment_success, get_apartment_failed } from '../types'
import axios from 'axios'


export const apartmentList = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: apartment_request
            })

            const res = await axios.get('http://localhost:5000/getRentHouseData')
            dispatch({
                type: get_apartment_success,
                payload: res.data
            })

        } catch (error) {
            dispatch({
                type: get_apartment_failed,
                payload: error.message
            })
        }
    }
}