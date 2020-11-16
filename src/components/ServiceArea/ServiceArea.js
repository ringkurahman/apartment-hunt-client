import React, { useEffect, useState } from 'react'
import ServiceData from './ServiceData'
import { connect } from 'react-redux'
import { apartmentList } from '../../reduxStore/actions/rentHouseAction'



const ServiceArea = ({ apartmentList, loading, apartments, error }) => {

    const [serviceLists, setServiceLists] = useState([])
    
    useEffect(() => {
        apartmentList()
    }, [])

    return (
        <section className="bg-brand">
            <div className="container">
                <div className="row d-flex flex-column">
                    <div className="col text-center mt-3">
                        <p className="brand-color mb-2">House Rent</p>
                        <h2>Discover the latest Rent <br/>available today</h2>
                    </div>
                    <div className="d-flex flex-wrap justify-content-center">
                        {loading ? <h3>Loading...</h3> : error ? <h3>{error}</h3> : <div className="d-flex flex-wrap justify-content-center my-5">
                        {
                         apartments.map(service =><ServiceData key={service._id} service={service}></ServiceData>)
                        }
                        </div>}
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = (state) => ({
    loading: state.rentHouseReducer.loading,
    apartments: state.rentHouseReducer.apartments,
    error: state.rentHouseReducer.error
})

export default connect(mapStateToProps, { apartmentList })(ServiceArea )