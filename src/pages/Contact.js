import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className="d-flex justify-content-center align-items-center header-container">
                <div className="container">
                    <h1 className='text-center mt-lg-5'>
                        Contact
                    </h1>
                </div>
            </div>
            <div className='container'>
                Coming soon...
            </div>
            <Footer />
        </div>
    );
};

export default Contact