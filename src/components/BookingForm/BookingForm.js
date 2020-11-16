import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { useHistory, useLocation } from 'react-router-dom';


const BookingForm = () => {
    
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

    const onSubmit = data => {
        fetch('http://localhost:5000/addBooking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...data, ...info })
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
    );
};

export default BookingForm