import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../App'
import logo from '../images/logos/logo.png'


const DashboardNavbar = () => {

    const [loggedInUser, setLogInUser] = useContext(UserContext)

    return (
        <nav className='navbar navbar-expand-lg navbar-light container my-3 menu'>
              <Link to='/'>
                  <img style={{ height: '50px'}} className="navbar-brand mr-5 pr-5" src={logo} alt="Creative Agency" />
              </Link>
             <p className='mt-3 ml-2'>Add Rent House</p>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul className='navbar-nav ml-auto'>
                    <li className='nav-item'>
                        <Link to='/login' className='nav-link px-4'>
                            {loggedInUser.email ? loggedInUser.name || loggedInUser.displayName : 'Login'}
                        </Link>
                    </li>
                    </ul>
                </div>
            </nav>
    );
};

export default DashboardNavbar