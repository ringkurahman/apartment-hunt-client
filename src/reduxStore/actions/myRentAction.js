import { myrent_request, get_myrent_success, get_myrent_failed } from '../types'
import axios from 'axios'


export const myRentList = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: myrent_request
            })

            const res = await axios.get('http://localhost:5000/myRent')
            console.log(res)
            dispatch({
                type: get_myrent_success,
                payload: res.data
            })

        } catch (error) {
            dispatch({
                type: get_myrent_failed,
                payload: error.message
            })
        }
    }
}