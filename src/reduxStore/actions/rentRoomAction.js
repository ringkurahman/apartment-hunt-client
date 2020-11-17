import { rentroom_request, get_rentroom_success, get_rentroom_failed } from '../types'
import axios from 'axios'


export const rentRoom = ({ match }) => {
    
    const getRoomData = JSON.parse(sessionStorage.getItem('room'))
    const id = match.params.id
    const matchId = getRoomData[0]._id
    console.log(matchId)


    return async (dispatch) => {
        try {
            dispatch({
                type: rentroom_request
            })

            const res = await axios.get(`http://localhost:5000/room/${id}`)
            console.log(res)
            dispatch({
                type: get_rentroom_success,
                payload: res.data
            })

        } catch (error) {
            dispatch({
                type: get_rentroom_failed,
                payload: error.message
            })
        }
    }
}

