import React, { useEffect } from 'react'
import DashboardNavbar from '../DashboardNavbar'
import RentForm from '../RentListForm/RentForm/RentForm'
import Sidebar from '../Sidebar/Sidebar'
import { connect } from 'react-redux'
import { myRentList } from '../../reduxStore/actions/myRentAction'



const MyRent = ({ myRentList, loading, rentlist, error }) => {
    
    useEffect(() => {
        myRentList()
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
                        {
                            rentlist.map(data =><RentForm key={data._id} data = {data}  />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    loading: state.myRentReducer.loading,
    rentlist: state.myRentReducer.rentlist,
    error: state.myRentReducer.error
})

export default connect(mapStateToProps, { myRentList })(MyRent)