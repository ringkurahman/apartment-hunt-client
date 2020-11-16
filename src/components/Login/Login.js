import React, { useContext, useState } from 'react'
import { UserContext } from '../../App'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { initializeLoginFramework, handleGoogleSignIn, handleSignOut, handleFBLogIn, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './LogInManager'
import googleIcon from '../../images/logos/google-icon.png'
import facebookIcon from '../../images/logos/facebook-icon.png'
import './Login.css'


const Login = () => {

    // State for new user
    const [newUser, setNewUser] = useState(false);
    // Multiple argument state
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        error: '',
        success: false,
        photo: '',
    })
      // Call firebase authentication function from LogInManager.js
    initializeLoginFramework()

    const [loggedInUser, setLogInUser] = useContext(UserContext)
    const history = useHistory()
    const location = useLocation()
    const { from } = location.state || { from: { pathname: '/dashboard' }, }
    
    // Google sign in event handler
    const googleSignIn = () => {
        handleGoogleSignIn().then((res) => {
        handleResponse(res, true)
        })
    }

    // Sign Out event handler
    const signOut = () => {
        handleSignOut().then((res) => {
        handleResponse(res, false)
        })
    }

    // Facebook sign in event handler
    const fbLogIn = () => {
        handleFBLogIn().then((res) => {
        setUser(res)
        handleResponse(res, true)
        })
    }

      // Create response function
    const handleResponse = (res, redirect) => {
        setUser(res)
        setLogInUser(res)
        if (redirect) {
        history.replace(from)
        }
    }

    // Catch event when field is blur
    const handleBlur = (e) => {
        let isFieldValid
        if (e.target.name === 'name') {
        isFieldValid = e.target.value
        }
        if (e.target.name === 'email') {
        // validation email
        isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
        }
        if (e.target.name === 'password') {
        // validation 1 uppercase 1 lowercase 1 number
        isFieldValid = /^(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})(?=(?:.*[0-9]){1})\S{6,20}$/.test(
            e.target.value
        )
        }
        if (isFieldValid) {
        const newUserInfo = { ...user }
        newUserInfo[e.target.name] = e.target.value
        setUser(newUserInfo)
        }
    }

    // Call onSubmit event handler
    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
        createUserWithEmailAndPassword(user.name, user.email, user.password).then(
            (res) => {
            // Call response handler from below function
            handleResponse(res, true)
            }
        )
        }
        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
            .then((res) => {
            // Call response handler from below function
            handleResponse(res, true)
            });
        }
        e.preventDefault()
    }
    
    return (
        <div className="mb-5">
            <div className='text-center'>
                <form onSubmit={handleSubmit}>
                    <div className='form-field p-4'>
                    <h4 className='text-left mb-5 ml-3'>
                        {newUser ? 'Created an account' : 'Login'}
                    </h4>
                    <p>
                        {newUser && (
                        <input
                            className='mb-2'
                            onBlur={handleBlur}
                            type='text'
                            name='name'
                            placeholder='First Name'
                            required
                        />
                        )}
                    </p>
                    <p>
                        {newUser && (
                        <input
                            className='mb-2'
                            onBlur={handleBlur}
                            type='text'
                            name='name'
                            placeholder='Last Name'
                            required
                        />
                        )}
                    </p>
                    <p>
                        <input
                        className='mb-2'
                        onBlur={handleBlur}
                        type='email'
                        name='email'
                        placeholder='Username or Email'
                        required
                        />
                    </p>
                    <p>
                        <input
                        className='mb-2'
                        onBlur={handleBlur}
                        type='password'
                        name='password'
                        placeholder='Password'
                        required
                        />
                    </p>
                    <p>
                        {newUser && (
                        <input
                            className='mb-2'
                            onBlur={handleBlur}
                            type='password'
                            name='password'
                            placeholder='Confirm Password'
                            required
                        />
                        )}
                    </p>
                    <p className='text-left mb-2 px-3'>
                        <input type='checkbox' name='checkbox' />
                        <span className='ml-3'>Remember Me</span>
                        <span className='float-right'>
                        <Link>Forgot Password</Link>
                        </span>
                    </p>
                        <input
                            className='mt-3'
                            type='submit'
                            value={newUser ? 'Create an account' : 'Login'}
                        />
                    <p>
                        {!newUser && (
                        <div className='login-qstn'>
                            <span>Don't have an account?</span>
                            <span className='pl-1'>
                            <Link onClick={() => setNewUser(!newUser)}>
                                <span>Create an account</span>
                            </Link>
                            </span>
                        </div>
                        )}
                    </p>
                    <p>
                        {newUser && (
                        <div>
                            <span>Already have an account?</span>
                            <span className='pl-1'>
                            <Link onClick={() => setNewUser(!newUser)}>
                                Login
                            </Link>
                            </span>
                        </div>
                        )}
                    </p>
                    </div>
                </form>
                <div>
                    <p className='divider'></p>Or<p className='divider'></p>
                </div>
                <div className='mb-2 mt-3'>
                    <button className='sign-btn' onClick={fbLogIn}>
                    <img
                        className='media-icon'
                        src={facebookIcon}
                        alt='google icon'
                    />
                    Continue with Facebook
                    </button>
                </div>
                <div>
                    <button className='sign-btn' onClick={googleSignIn}>
                    <img className='media-icon' src={googleIcon} alt='google icon' />
                    Continue with Google
                    </button>
                </div>
                <p style={{ color: 'red' }}>{user.error}</p>
                {user.success && (
                    <p style={{ color: 'green' }}>
                    you have successfully{' '}
                    {newUser ? 'created a new account' : 'logged in'}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Login