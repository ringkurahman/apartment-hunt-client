import React from 'react'
import marker from '../../images/logos/map-marker.png'
import bathIcon from '../../images/logos/bath-icon.png'
import bedIcon from '../../images/logos/bed-icon.png'
import { Link } from 'react-router-dom'



const ServiceData = ({ service }) => {
    
    const { _id, title, location, bedroom, bathroom, price, image } = service

    return (
        <div className="ml-3 mt-3">
                    <div className="card" style={{width: '19rem'}}>
                        <img className="card-img-top" src={`data:image/png;base64,${service.image.img}`} alt="Service One" />
                        <div className="card-body">
                            <h3 className="card-title">{ title }</h3>
                            <div className="d-flex align-items-center">
                                <img src={marker} alt="Marker" style={{height: '0.923rem'}}/>
                                <p className="card-text ml-2">{ location }</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className='d-flex align-items-center'>
                                    <img src={bedIcon} alt="Marker" style={{height: '0.923rem'}}/>
                            <p className="card-text ml-2">{ bedroom }</p>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <img src={bathIcon} alt="Marker" style={{height: '0.923rem'}}/>
                            <p className="card-text ml-2">{ bathroom }</p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center mt-4'>
                                <p className="card-price">${ price }</p>
                                <p>
                                    <Link to={`/apartment/${_id}`} className='text-white btn btn-login'>
                                    <span>View Details</span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
    );
};

export default ServiceData