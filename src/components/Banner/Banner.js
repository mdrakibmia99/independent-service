import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner1 from '../../images/banner/banner1.jpg';
import banner2 from '../../images/banner/banner2.jpg';


 

const Banner = () => {
    const [index, setIndex] = useState(0);
          
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
              <Carousel activeIndex={index} onSelect={handleSelect} className={'w-100'}>
                <Carousel.Item className='hero-bg'>
                  <img  style={{opacity: 0.5}}
                    className="d-block w-100 h-25 "
            
                    src={banner1}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                  <section className="hero text-center vh-100 w-100 d-flex flex-column justify-content-center align-items-center  py-5 my-5">
                <h2>Honest</h2>
                <span>treatment</span>
                <h2>Clear</h2>
                <span>advice</span>
                <h2>Smart</h2>
                <span className='mb-3'>strategies</span>
                <Link to={'/about'}><button className='btn btn-success  mx-auto rounded-pill '>Learn more</button></Link>
            </section> 
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 h-25"
                    style={{}}
                    src={banner2}
                    alt="Second slide"
                  />
          
                  <Carousel.Caption>
                  <section className="hero text-center vh-100 w-100 d-flex flex-column justify-content-center align-items-center  py-5 my-5">
                <h2 className='text-light bg-dark'>Money Loss</h2>
                <span className='text-primary bg-dark'>Nothing Loss</span>
                <h2 className='text-light bg-dark'>CGPA Loss</h2>
                <span className='text-primary bg-dark'>Something Loss</span>
                <h2 className='text-light bg-dark'>Honesty Loss</h2>
                <span className='text-primary bg-dark mb-3'>All Loss</span>
                <Link to={'/about'}><button className='btn btn-success  mx-auto rounded-pill '>Learn more</button></Link>
            </section> 
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            );
          }
          

export default Banner;