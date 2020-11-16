import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../App'
import DashboardNavbar from '../DashboardNavbar'
import RentForm from '../RentListForm/RentForm/RentForm'
import Sidebar from '../Sidebar/Sidebar'


const MyRent = () => {

    const [loggedInUser, setLogInUser] = useContext(UserContext)
    const [rentLists, setRentLists] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/myRent')
            .then(res => res.json())
            .then(data => setRentLists(data))
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
                        <RentForm rentLists = {rentLists}  />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyRent