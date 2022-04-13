import React from 'react';
import sleeping from '../../../images/sleeping404.jpg'

const NotFound = () => {
    return (
        <div className='container text-center text-danger p-3'>
            <h2>Mechanic is sleeping...</h2>
            <img className='rounded ' src={sleeping} alt="" height='400' />
        </div>
    );
};

export default NotFound;