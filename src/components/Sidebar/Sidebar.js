import React from 'react'
import { Link } from 'react-router-dom'
import { faHdd, faHome, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Sidebar.css'


const Sidebar = () => {

    return (
        <div>
            <div className="sidebar d-flex flex-column justify-content-between my-3">
                <ul className="list-unstyled">
                    <li>
                        <Link to="/bookinglist" className="text-dark">
                            <FontAwesomeIcon icon={faHdd} /> <span>Booking List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard" className="text-dark">
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Rent House</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/myrent" className="text-dark">
                            <FontAwesomeIcon icon={faHome} /> <span>My Rent</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar