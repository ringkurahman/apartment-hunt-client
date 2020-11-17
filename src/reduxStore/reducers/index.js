import { combineReducers } from 'redux'
import rentHouseReducer from './rentHouseReducer'
import rentRoomReducer from './rentRoomReducer'
import myRentReducer from './myRentReducer'


export default combineReducers({
    rentHouseReducer,
    rentRoomReducer,
    myRentReducer,
})