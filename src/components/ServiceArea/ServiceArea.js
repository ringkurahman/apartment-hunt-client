import React, { useEffect, useState } from 'react'
import ServiceData from './ServiceData'



const ServiceArea = () => {

    const [serviceLists, setServiceLists] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:5000/getRentHouseData')
            .then(res => res.json())
            .then(data => setServiceLists(data))
    }, [])

    return (
        <section className="bg-brand">
            <div className="container">
                <div className="row d-flex flex-column">
                    <div className="col text-center mt-3">
                        <p className="brand-color mb-2">House Rent</p>
                        <h2>Discover the latest Rent <br/>available today</h2>
                    </div>
                    <div className="d-flex flex-wrap justify-content-center my-5">
                        {
                         serviceLists.map(service =><ServiceData key={service._id} service={service}></ServiceData>)
                        }
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceArea