import React, { useEffect, useState } from 'react';


import Service from '../Service/Service';


const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('/services.json')
        .then(res=> res.json())
        .then(data=> setServices(data))
    },[])



    // const navigate = useNavigate();

    // const navigateToServiceDetail = (id) => {
    //     navigate(`/service/${id}`)
    // };

    return (
        <div className='mt-5'>
            <h2 className='common-header mb-5'># <span>MY SERVICES</span></h2>

            <section className='d-flex flex-lg-row flex-column justify-content-between align-items-center gap-3'>
                    {
                        services.slice(0, 3).map(service => <Service
                            key={service.sid}
                            service={service}
                        ></Service>)
                    }
                </section>
          






              {/* <section className='d-flex flex-lg-row flex-column justify-content-between align-items-baseline'>
            <Container>
                <Row>
                    <Col md={4} className={'position-relative px-5'} >
                    <img  src={services3} alt="thumbnail-2" className='img-fluid mx-auto'  />
                        <h3 className='mt-3'>Family Cases</h3>
                        <p className='text-muted'>Family cases are a type of civil case, but they generally involve issues between or concerning spouses, parents, and children.Family courts handle a wide variety of cases involving domestic matters.The most common issues handled at family court include. Schedule your consultation online today - all in one step.  There's no nee.</p>
                        <Link to={'/checkout'}><button className='btn btn-success '>Add service</button></Link>
                    </Col>
                    <Col md={4} className={'position-relative px-5'}>
                    <img src={services1} alt="thumbnail-3" className=' img-fluid'/>
                        <h3 className='mt-3'>Criminal Cases</h3>
                        <p className='text-muted'>Criminal cases involve enforcing public codes of behavior, which are codified in the laws of the state. In criminal cases, the government prosecutes individuals for violating those laws (in other words, for allegedly committing a crime). Punishment in criminal cases can include fines, community service, probation, or prison.</p>
                        <Link to={'/checkout'}><button className='btn btn-success position-absolute bottom-0'>Add service</button></Link>
                    </Col >
                    <Col md={4} className={'position-relative px-5'}>
                    <img src={services2} alt="thumbnail-1" className='img-fluid'/>
                        <h3 className='mt-3'>Civil Cases</h3>
                        <p className='text-muted'>Civil cases involve conflicts between people or institutions such as businesses, typically over money.Civil cases include lawsuits for money, landlord/tenant matters, breach of contract claims, and cases where one person is trying to make someone else do something (for example, sell some property).</p>
                        <Link to={'/checkout'}><button >}
 className='btn btn-success position-absolute bottom-0'>Add service</button></Link>
                    </Col>
                </Row>
            </Container>


           
                   
                </section> */}
        </div>
    );
};

export default Services;