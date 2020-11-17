import React from 'react'


const RentListForm = ({ booking }) => {

    const { _id, name, email, number, desc } = booking

        const handleChange = (e) => {
        fetch('http://localhost:5000/update', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ _id: _id, status: e.target.value })
            })
                .then(res => res.json())
                .then(data => console.log('data updated'))
        }

    return (
        <div className="bg-white p-3 table-container">
            <table className="table table-borderless">
                <thead style={{ backgroundColor: "#f5f6fa" }}>
                    <tr>
                        <th style={{ color: "#aaaaaa" }} scope="col">Name</th>
                        <th style={{ color: "#aaaaaa" }} scope="col">Email ID</th>
                        <th style={{ color: "#aaaaaa" }} scope="col">Phone No</th>
                        <th style={{ color: "#aaaaaa" }} scope="col">Message</th>
                        <th style={{ color: "#aaaaaa" }} scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                            <tr>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{number}</td>
                                <td>{desc}</td>
                              <select onChange={handleChange}>
                              <option value="Pending">Pending</option>
                              <option value="On going">On Going</option>
                              <option value="Done">Done</option>
                              <option value="Cancel">Cancel</option>
                            </select>
                        </tr>
                </tbody>
            </table>
        </div>
    );
};

export default RentListForm