import React from 'react'
import apartmentIcon from '../../images/logos/apartment1.png'
import affordableIcon from '../../images/logos/affordable1.png'
import lesseIcon from '../../images/logos/lesse-icon.png'



const BusinessArea = () => {
    return (
        <section className="bg-brand">
            <div className="container">
                <div className="row d-flex flex-column">
                    <div className="col text-center mt-3">
                        <p className="brand-color mb-2">Service</p>
                        <h2>We're an agency tailored to all<br/>clients' needs that always delivers</h2>
                    </div>
                    <div className="d-flex flex-wrap justify-content-center my-5">
                        <div className="card business-card" style={{width: '20rem'}}>
                            <div className='d-flex justify-content-center'>
                                <img className="card-img-top " src={apartmentIcon} alt="Home icon" style={{width: '5rem'}}/>
                            </div>
                            <div className="card-body text-center">
                                <h4 className="card-title">Wide Range of Properties</h4>
                                <p className="card-text">With a robust selection of popular properties on hand, as well as leading properties from experts.</p>
                            </div>
                        </div>

                        <div className="card business-card" style={{width: '20rem'}}>
                            <div className='d-flex justify-content-center'>
                                <img className="card-img-top " src={affordableIcon} alt="Home icon" style={{width: '5rem'}}/>
                            </div>
                            <div className="card-body text-center">
                                <h4 className="card-title">Financing Made Easy</h4>
                                <p className="card-text">Our stress-free finance department that can find financial solutions to save you money.</p>
                            </div>
                        </div>

                        <div className="card business-card" style={{width: '20rem'}}>
                            <div className='d-flex justify-content-center'>
                                <img className="card-img-top " src={lesseIcon} alt="Home icon" style={{width: '5rem'}}/>
                            </div>
                            <div className="card-body text-center">
                                <h4 className="card-title">Trusted by Thousands</h4>
                                <p className="card-text">10 new offers every day. 350 offers on site, trusted by a community of thousands of users.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessArea;