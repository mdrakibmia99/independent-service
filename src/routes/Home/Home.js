import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import partner1 from '../../images/partner1.jpg';
import partner2 from '../../images/partner2.jpg';
import partner3 from '../../images/partner3.jpg';
import partner4 from '../../images/partner4.jpg';
import partner5 from '../../images/partner5.jpg';
import partner6 from '../../images/partner6.jpg';
import partner7 from '../../images/partner7.jpg';
import partner8 from '../../images/partner8.jpg';
import partner9 from '../../images/partner9.jpg';

import Services from '../../components/Services/Services';
import Banner from '../../components/Banner/Banner';
import Service from '../../components/Service/Service';

const Home = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('/services.json')
        .then(res=> res.json())
        .then(data=> setServices(data))
    },[])
    return (
        <section className='overflow-hidden'>
            {/* <section className="hero text-center vh-100 vw-100 d-flex flex-column justify-content-center">
                <h2>Honest</h2>
                <span>treatment</span>
                <h2>Clear</h2>
                <span>advice</span>
                <h2>Smart</h2>
                <span>strategies</span>
                <Link to={'/about'}><button className='btn btn-success w-25 mx-auto rounded-pill mt-5'>Learn more</button></Link>
            </section> */}
            {/* Home page banner */}
            <Banner></Banner>



            <section className='container mx-auto my-5'>
                {/* partners */}
                <div>
                    <h2 className='common-header'># <span>My Partners</span></h2>
                    <div className='mt-4 partner'>
                        <div>   <img src={partner1} alt="partner-1" className='m-auto' /></div>
                        <div>   <img src={partner2} alt="partner-2" className='m-auto' /></div>
                        <div>  <img src={partner3} alt="partner-3" className='m-auto' /></div>
                        <div>  <img src={partner4} alt="partner-4" className='m-auto' /></div>
                        <div>   <img src={partner5} alt="partner-5" className='m-auto' /></div>
                        <div>   <img src={partner6} alt="partner-6" className='m-auto' /></div>
                        <div>  <img src={partner7} alt="partner-7" className='m-auto' /></div>
                        <div>  <img src={partner8} alt="partner-8" className='m-auto' /></div>
                        <div>   <img src={partner9} alt="partner-9" className='m-auto' /></div>
                    </div>
                </div>
                {/* commitment */}
                <div className='my-5'>
                    <h2 className='common-header'># <span>I'll work for you</span></h2>
                    <article className='text-center mt-4'>
                        <p className='text-muted text-center'>
                            Employment laws are complicated, and they're changing every day.
                            We bring clarity, direction, and sense to employment disputes.
                            <br />
                            We advocate for individuals - employees, executives, and entrepreneurs.
                            <br />
                            We work to secure fair treatment in the workplace, and get results inside and outside of the courtroom.
                            Job problems are stressful enough.  Let us help you navigate.
                        </p>
                    </article>
                </div>
                {/* intro */}
                <div className='intro-line my-5'><hr /></div>
               {/* <Services></Services> */}
               <h2 className='common-header mb-5'># <span>MY SERVICES</span></h2>
<section className='d-flex flex-lg-row flex-column justify-content-between align-items-center gap-3'>
    
                    {
                        services.slice(0, 3).map(service => <Service
                            key={service.sid}
                            service={service}
                        ></Service>)
                    }
                </section>
            </section>
        </section>
    );
};

export default Home;