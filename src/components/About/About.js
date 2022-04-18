import React, { useState } from 'react';
import userImg from '../../images/user-about.jpg';
import './About.css'

const About = () => {
    const [readMore, setReadMore] = useState(false);
    return (
        <div className='w-100'>
            <div className='text-center'>
            <h2 class="section-heading text-center mt-5">About me</h2>
            </div>

            <div className='d-flex justify-content-between container mx-auto my-5'>
            <div className='px-5'>
                <h1 className='display-2'>About  Me</h1>
                <article>
                    <p className='me-5'>
                        I want to build a JavaScript library like: React, Vue or Angular e.t.c. As a web developer, my core ambition is now make other developers life easy and flow less so that they can envoy with their own joy and make other happy. Even want to create top level site which can breakthrough others but contribution able interest. Contentional website is my target which I can refill soon. I'm aware about it.
                    </p>
                    {
                        readMore
                            ?
                            <button className='btn btn-success' onClick={() => setReadMore(!readMore)}>Read less</button>
                            :
                            <button className='btn btn-success' onClick={() => setReadMore(!readMore)}>Read more</button>
                    }
                    {
                        readMore
                            ?
                            <ol className='mt-3 ps-3'>
                                <li>Stay persistance with my goal</li>
                                <li>Convenience studiedly strategy</li>
                                <li>Turn leisure time in convention which is ultimatum to acheive my goal</li>
                                <li>Never give up prodigy</li>
                                <li>Listen more knowledgeable person than me</li>
                            </ol>
                            :
                            ''
                    }
                </article>
            </div>
            <div>
                <img src={userImg} alt="myself" className='mw-100 w-100' />
            </div>
        </div>
        </div>
    );
};

export default About;