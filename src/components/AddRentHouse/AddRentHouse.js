import React, { useState } from 'react'



const AddRentHouse = () => {

    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null)

    // Get form input value by event target and onBlur
    const handleBlur = e => {
        const newInfo = { ...info }
        newInfo[e.target.name] = e.target.value
        setInfo(newInfo)
    }

    // Get form input file by event target and onChange
    const handleFileChange = (e) => {
        const newFile = e.target.files[0]
        setFile(newFile)
    }

    // Store order form data and image into mongodb
    const handleRentRoomSubmit = () => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('title', info.title)
        formData.append('location', info.location)
        formData.append('bathroom', info.bathroom)
        formData.append('bedroom', info.bedroom)
        formData.append('price', info.price)

        fetch('http://localhost:5000/addRentHouse', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="p-4" style={{ backgroundColor: "#F4FDFB", borderRadius: '15px' }}>
            <div className="p-4" style={{ backgroundColor: "#fff", borderRadius: '15px' }}>
                <form onSubmit={handleRentRoomSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Service Title</label>
                                <input onBlur={handleBlur} type="text" className="form-control" name="title" placeholder="Enter Title" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Location</label>
                                <input onBlur={handleBlur} type="text" className="form-control" name="location" placeholder="Enter Location" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">No of Bathroom</label>
                                <input onBlur={handleBlur} type="text" className="form-control" name="bathroom" placeholder="Enter Bathroom Qnt" />
                            </div>

                        </div>
                        <div className="form-group col-md-6">
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Price</label>
                                <input onBlur={handleBlur} type="text" className="form-control" name="price" placeholder="Enter Price" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">No of Bedroom</label>
                                <input onBlur={handleBlur} type="text" className="form-control" name="bedroom" placeholder="Enter Bedroom Qnt" />
                            </div>

                            <label className="d-block" htmlFor="exampleInputPassword1">Icon</label>
                            <input onChange={handleFileChange} type="file" id="btn-upload" placeholder="Upload image" />
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-login text-white px-3">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddRentHouse