import React, { useEffect, useState } from 'react'
import BookingForm from '../components/BookingForm/BookingForm'
import image2 from '../images/rectangle407.png'
import image3 from '../images/rectangle408.png'
import image4 from '../images/rectangle409.png'
import image5 from '../images/rectangle410.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { rentRoom } from '../reduxStore/actions/rentRoomAction'


const Apartment = ({ rentRoom, loading, rentroom, error }) => {

    const { id } = useParams()
    const [apartment, setApartment] = useState([])
    
    useEffect(() => {
        fetch(`http://localhost:5000/room/${id}`)
            .then(res => res.json())
            .then(data => {
                setApartment(data)
                sessionStorage.setItem('room', JSON.stringify(data))
            })
        
    }, [id])

    return (
        <div>
            <Navbar />
            <div className="d-flex justify-content-center align-items-center header-container">
                <div className="container">
                    <h1 className='text-center mt-lg-5'>
                        Apartment
                    </h1>
                </div>
            </div>
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-md-8'>
                        <div>
                            {
                                apartment.map(data => <img className='img-fluid' src={`data:image/png;base64,${data.image.img}`} alt='Family Apartment'/>) 
                            }
                        </div>
                        <div className='d-flex flex-wrap my-3'>
                            <div className=''>
                            <img className='img-fluid pt-3' src={image2} alt='Family Apartment' style={{ width: '10.625rem' }} />
                            </div>
                            <div className='ml-lg-3 pt-3'>
                                <img className='img-fluid' src={image3} alt='Family Apartment' style={{ width: '10.625rem' }} />
                            </div>
                            <div className='ml-lg-3 pt-3'>
                                <img className='img-fluid' src={image4} alt='Family Apartment' style={{ width: '10.625rem' }} />
                            </div>
                            <div className='ml-lg-3 pt-3'>
                                <img className='img-fluid' src={image5} alt='Family Apartment' style={{ width: '10.625rem' }} />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <BookingForm id={id} />
                    </div>
                </div>
                <div className='col-md-8 my-3 pl-0'>
                    <div>
                        <div className='d-flex justify-content-between'>
                            {
                            apartment.map(data => <h2 className='color-brand'>{data.title}</h2>) 
                            }
                            {
                                apartment.map(data => <h2 className='color-brand'>${data.price}</h2>) 
                            }
                        </div>
                        <p className='desc'>3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.</p>
                    </div>
                    <div className='mt-5'>
                        <h3 className='color-brand'>Price Details-</h3>
                        <p className='desc'>Rent/Month: $550 (negotiable)</p>
                        <p className='desc'>Service Charge : 8,000/= Tk per month, subject to change</p>
                        <p className='desc'>Security Deposit : 3 month’s rent</p>
                        <p className='desc'>Flat Release Policy : 3 months earlier notice required</p>
                    </div>
                    <div className='mt-5'>
                        <h3 className='color-brand'>Property Details-</h3>
                        <p className='desc'>Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area.</p>
                        <p className='desc'>Flat Size : 3000 Sq Feet.</p>
                        <p className='desc'>Floor :  A5 (5th Floor) (6 storied Building ) (South Facing Unit)</p>
                        <p className='desc'>Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet</p>
                        <p className='desc'>Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished.</p>
                        <p className='desc'>Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

const mapStateToProps = (state) => ({
    loading: state.rentRoomReducer.loading,
    rentroom: state.rentRoomReducer.rentroom,
    error: state.rentRoomReducer.error
})

export default connect(mapStateToProps, { rentRoom })(Apartment)