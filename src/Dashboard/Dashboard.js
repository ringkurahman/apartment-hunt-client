import React from 'react'
import AddRentHouse from '../components/AddRentHouse/AddRentHouse'
import DashboardNavbar from '../components/DashboardNavbar';
import Sidebar from '../components/Sidebar/Sidebar'

const Dashboard = () => {
    return (
        <div className='container'>
            <DashboardNavbar />
            <div className="row d-flex flex-wrap">
                <div className="col-12 col-sm-12 col-md-2">
                    <Sidebar />
                </div>
                <div className="col-12 col-sm-12 col-md-10">
                    <AddRentHouse />
                </div>
            </div>
        </div>
    );
};

export default Dashboard