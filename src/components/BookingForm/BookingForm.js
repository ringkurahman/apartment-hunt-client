import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { useHistory, useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import { apartmentList } from '../../reduxStore/actions/rentHouseAction'


const BookingForm = ({id, apartmentList, loading, apartments, error }) => {
    
    const { register, handleSubmit, watch, errors } = useForm()
    const [info, setInfo] = useState({})
    const history = useHistory()
    const location = useLocation()
    const { from } = location.state || { from: { pathname: '/login' }, }

    // Get form input value by event target and onBlur
    const handleBlur = e => {
        const newInfo = { ...info }
        newInfo[e.target.name] = e.target.value
        setInfo(newInfo)
    }

    const selectData = apartments.filter(item => item._id === id)
    console.log(selectData)
    const onSubmit = data => {

        const newInfo = { ...info }
        newInfo.status = 'Pending'
        newInfo.bathroom = selectData[0].bathroom
        newInfo.bedroom = selectData[0].bedroom
        newInfo.price = selectData[0].price
        newInfo.title = selectData[0].title
        newInfo.location = selectData[0].location
        newInfo.id = selectData[0]._id
        console.log(newInfo)
        fetch('http://localhost:5000/addBooking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...data, newInfo })
        })
            .then(response => response.json())
            .then(data => {
                alert('Message successfully submitted')
            })
            .catch(error => {
                console.error(error)
            })
        history.replace(from)
    }

    useEffect(() => {
        apartmentList()
    }, [])

    return (
        <div className="bg-light px-3 pt-5 pb-4">
            <form className='ship-form' onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Full Name" />
                        </div>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="number" className="form-control" name="number" placeholder="Phone No." />
                        </div>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Email Address" />
                        </div>
                        <div className="form-group">
                            <textarea onBlur={handleBlur} className="form-control" name="desc" cols="68" rows="6" placeholder="Message" />
                        </div>
                    </div>
                </div>
                <button type="submit" className="form-control btn btn-login text-white px-4">Request Booking</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    loading: state.rentHouseReducer.loading,
    apartments: state.rentHouseReducer.apartments,
    error: state.rentHouseReducer.error
})

export default connect(mapStateToProps, { apartmentList })(BookingForm )