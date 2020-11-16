import React from 'react'
import BusinessArea from '../components/BusinessArea/BusinessArea'
import Footer from '../components/Footer';
import HeroArea from '../components/HeroArea/HeroArea'
import Navbar from '../components/Navbar';
import ServiceArea from '../components/ServiceArea/ServiceArea'


const Homepage = () => {
    return (
        <>
            <Navbar />
            <HeroArea />
            <ServiceArea />
            <BusinessArea />
            <Footer />
        </>
    );
};

export default Homepage