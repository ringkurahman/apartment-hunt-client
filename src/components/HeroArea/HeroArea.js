import React from 'react'

const HeroArea = () => {
    return (
        <header className="header-container">
            <div className="container d-flex flex-column justify-content-center align-items-center py-5">
                <h1 className='text-center text-uppercase mt-lg-5'>
                    FIND YOUR HOUSE RENT
                </h1>
                <div className='input-group col-md-8 m-auto mt-lg-4'>
                    <input
                        type='text'
                        name='search'
                        className='form-control'
                        placeholder='search...'
                    />
                    <div className='ml-2'>
                            <button
                            type='submit'
                            className='input-group-text text-white input-round btn-login'
                            >
                            Find Now
                            </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeroArea