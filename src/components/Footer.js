import React from 'react'
import { Link } from 'react-router-dom'
import facebook from '../images/logos/facebook-vector.png'
import pinterest from '../images/logos/pinterest-vector.png'
import linkedIn from '../images/logos/linkedin-vector.png'
import youtube from '../images/logos/youtube-vector.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
            <div className="row" >
                <div className="col-12 col-sm-6 col-md-5 p-md-5 p-4">
                    <h6><FontAwesomeIcon icon={faMapMarkerAlt} /> H#340(4th floor), Road #24</h6>
                    <h6>New DOHS, Mohakali, Dhaka, Bangladesh</h6>
                    <h6>Phone: 018xxxxxxxx</h6>
                    <h6>Email: info@company.com</h6>
                </div>
                <div className="col-12 col-sm-6 col-md-2 p-md-0 p-sm-4 p-md-4 pt-md-5">
                    <ul className="p-0">
                        <h5>Company</h5>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Site Map</Link></li>
                        <li><Link to="/">Support Center</Link></li>
                        <li><Link to="/">Terms Conditions</Link></li>
                        <li><Link to="/">Submit Listing</Link></li>
                    </ul>
                </div>
                <div className="col-12 col-sm-6 col-md-2 p-md-0 p-sm-4 p-md-4  pt-md-5">
                    <ul className="p-0">
                        <h5>Quick Links</h5>
                        <li><Link to="/">Quick Links</Link></li>
                        <li><Link to="/">Rent Als</Link></li>
                        <li><Link to="/">Sales</Link></li>
                        <li><Link to="/">Contact</Link></li>
                        <li><Link to="/">Terms Conditions</Link></li>
                        <li><Link to="/">Our Blog</Link></li>
                    </ul>
                </div>
                <div className="col-12 col-sm-6 col-md-3 p-md-0 p-sm-4 p-md-4  pt-md-5">
                    <ul className="p-0">
                        <h5>About Us</h5>
                        <li><p>We are the top real estate
                        agency in Sydney, with agents
                        available to answer any
                        question 24/7.</p></li>

                        <li><Link to="/"><img className="mr-sm-2" src={facebook} alt="" /></Link><Link to="/"><img className="mr-sm-2" src={pinterest} alt="" /></Link><Link to="/"><img className="mr-sm-2" src={linkedIn} alt="" /></Link><Link to="/"><img src={youtube} className="mr-sm-2" alt="" /></Link></li>
                    </ul>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer