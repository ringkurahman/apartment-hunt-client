import React from 'react'


const RentForm = ({ rentLists }) => {
    
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
                {
                  rentLists.map(list => 
                        
                    <tr>
                        <td>{list.title}</td>
                        <td>${list.price}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
        </div>
    );
};

export default RentForm