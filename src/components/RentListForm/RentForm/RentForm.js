import React from 'react'


const RentForm = ({ data }) => {

    const getBookedData = JSON.parse(sessionStorage.getItem('bookedData'))
    const { title, price, status } = getBookedData
    
    return (
        <div className="bg-white p-3 table-container">
            <table className="table table-borderless">
            <thead style={{ backgroundColor: "#f5f6fa" }}>
                <tr>
                <th style={{ color: "#aaaaaa"}} scope="col">House Name</th>
                <th style={{ color: "#aaaaaa"}} scope="col">Price</th>
                <th style={{ color: "#aaaaaa"}} scope="col">Action</th>
                </tr>
            </thead>
            <tbody>    
                    <tr>
                        <td>{title}</td>
                        <td>${price}</td>
                        <td>{ status }</td>
                    </tr>
            </tbody>
        </table>
        </div>
    )
}

export default RentForm