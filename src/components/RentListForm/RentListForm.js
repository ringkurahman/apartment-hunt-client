import React from 'react'


const RentListForm = ({ bookings }) => {

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
                    {
                        bookings.map(list =>
                            <tr>
                                <td>{list.name}</td>
                                <td>{list.email}</td>
                                <td>{list.number}</td>
                                <td>{list.desc}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default RentListForm