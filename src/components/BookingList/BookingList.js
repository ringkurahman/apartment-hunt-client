import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../App';
import DashboardNavbar from '../DashboardNavbar'
import RentListForm from '../RentListForm/RentListForm'
import Sidebar from '../Sidebar/Sidebar'



const BookingList = () => {

    const [loggedInUser, setLogInUser] = useContext(UserContext)
    const [bookings, setBookings] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/getBooking?email='+loggedInUser.email)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])


    return (
        <div className='container'>
            <DashboardNavbar />
            <div className="row d-flex flex-wrap">
                <div className="col-12 col-sm-12 col-md-2">
                    <Sidebar />
                </div>
                <div className="col-12 col-sm-12 col-md-10">
                    <div className="p-4" style={{ backgroundColor: "#F4FDFB", borderRadius: '15px' }}>
                        <RentListForm bookings={bookings} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingList