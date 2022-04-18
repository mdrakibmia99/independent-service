import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams();


    return (
        <div>
             <div className='my-5 container mx-auto'>
            <h2>Service ID no: {serviceId}</h2>
            <Link to={'/checkout'}><button className='btn btn-success my-3'>Proceed to checkout</button></Link>
        </div>
        </div>
    );
};

export default ServiceDetails;