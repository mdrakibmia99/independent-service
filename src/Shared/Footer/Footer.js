import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <section className='text-white bg-dark py-2' >
        <p className='mb-0 text-center'><strong>Copyright ©  {year} </strong>All right reserved.</p>
    </section>
    );
};

export default Footer;