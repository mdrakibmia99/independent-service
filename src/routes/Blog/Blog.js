import React, { useState } from 'react';

const Blog = () => {
    const [readMore, setReadMore] = useState(false);
    const [readMore1, setReadMore1] = useState(false);
    const [readMore2, setReadMore2] = useState(false);
    const [readMore3, setReadMore3] = useState(false);
    return (
        <div className=''>
            <div className='text-center'>
            <h2 className="section-heading text-center my-5">Question Answer</h2>
            </div>
             
            <div className='w-50 mx-auto '>
                <article>

                    {
                        readMore
                            ?
                            <button className='btn btn-success px-5 mb-4 w-100' onClick={() => setReadMore(!readMore)}>Authorization Vs Authentication -</button>
                            :
                            <button className='btn btn-success  px-5 mb-4 w-100' onClick={() => setReadMore(!readMore)}>Authorization Vs Authentication +</button>
                    }
                    {
                        readMore
                            ?
                            <div>
                                <ol className='mt-3 ps-3'>
                                    <h3>Authorization</h3>
                                    <li>প্রমাণীকরণ ব্যবহারকারী কে তা যাচাই করে।</li>
                                    <li>পাসওয়ার্ড, ওয়ান-টাইম পিন, বায়োমেট্রিক তথ্য এবং ব্যবহারকারীর দ্বারা প্রদত্ত বা প্রদত্ত অন্যান্য তথ্যের মাধ্যমে প্রমাণীকরণ কাজ করে।</li>
                                    <li>প্রমাণীকরণ একটি ভাল পরিচয় এবং অ্যাক্সেস ব্যবস্থাপনা প্রক্রিয়ার প্রথম ধাপ। </li>
                                </ol>

                                <ol className='mt-3 ps-3'>
                                    <h3>Authentication</h3>
                                    <li>অনুমোদন নির্ধারণ করে কোন ব্যবহারকারী কোন রিসোর্স অ্যাক্সেস করতে পারে।</li>
                                    <li>অনুমোদন সেই সেটিংসের মাধ্যমে কাজ করে যা সংস্থার দ্বারা বাস্তবায়িত এবং রক্ষণাবেক্ষণ করা হয়।</li>
                                    <li>অনুমোদন সর্বদা প্রমাণীকরণের পরে সঞ্চালিত হয় ।</li>
                                </ol>
                            </div>
                            :
                            ''
                    }
                </article>
            </div>

            {/* second question 1 */}

            <div className='w-50 mx-auto'>
                <article>

                    {
                        readMore1
                            ?
                            <button className='btn btn-success px-5 w-100 mb-4'  onClick={() => setReadMore1(!readMore1)}>Why are you using firebase? -</button>
                            :
                            <button className='btn btn-success  px-5 w-100 mb-4 ' onClick={() => setReadMore1(!readMore1)}>Why are you using firebase +</button>
                    }
                    {
                        readMore1
                            ?
                            <div>


                                <ol className='mt-3 ps-3' >
                                    আপনি একটি ডিভাইসে চলমান অবস্থান পরিষেবাটি জিজ্ঞাসা করতে পারেন, যা জিপিএস বা ওয়াই-ফাই ব্যবহার করে তার অবস্থান ত্রিভুজ করতে পারে এবং আপনি আইপি ডাটাবেস দ্বারা একটি ভূ-অবস্থান ব্যবহার করতে পারেন।
                                </ol>
                            </div>
                            :
                            ''
                    }
                </article>
            </div>
            {/* question 2.1 */}
            <div className='w-50 mx-auto'>
                <article>

                    {
                        readMore2
                            ?
                            <button className='btn btn-success px-5 w-100 mb-4' onClick={() => setReadMore2(!readMore2)}> What other options do you have to implement authentication -</button>
                            :
                            <button className='btn btn-success w-100  px-5 mb-4' onClick={() => setReadMore2(!readMore2)}>What other options do you have to implement authentication +</button>
                    }
                    {
                        readMore2
                            ?
                            <div>
                                <ol className='mt-3 ps-3'>
                                    <p>
                                        আপনি একটি ডিভাইসে চলমান অবস্থান পরিষেবাটি জিজ্ঞাসা করতে পারেন, যা জিপিএস বা ওয়াই-ফাই ব্যবহার করে তার অবস্থান ত্রিভুজ করতে পারে এবং আপনি আইপি ডাটাবেস দ্বারা একটি ভূ-অবস্থান ব্যবহার করতে পারেন।
                                    </p>
                                </ol>
                            </div>
                            :
                            ''
                    }
                </article>
            </div>
            {/* question 3 */}
            <div className='w-50 mx-auto'>
                <article>

                    {
                        readMore3
                            ?
                            <button className='btn btn-success px-5 w-100 mb-4' onClick={() => setReadMore3(!readMore3)}> What other services does firebase provide other than authentication -</button>
                            :
                            <button className='btn btn-success  px-5 w-100 mb-4' onClick={() => setReadMore3(!readMore3)}>AWhat other services does firebase provide other than authentication +</button>
                    }
                    {
                        readMore3
                            ?
                            <div>
                                <ol className='mt-3 ps-3'>
                                    <p>
                                        ফায়ারবেস স্টোরেজ ব্যবহার করার জন্য আমাদের ফায়ারবেস প্রমাণীকরণের মাধ্যমে একজন ব্যবহারকারীকে প্রমাণীকরণ করতে হবে। ডিফল্ট নিরাপত্তা নিয়ম ব্যবহারকারীদের প্রমাণীকরণ প্রয়োজন. ফায়ারবেস স্টোরেজ মূলত একটি শক্তিশালী এবং সহজ অবজেক্ট স্টোরেজ, যেখানে আপনি সহজেই আপনার ফাইল সংরক্ষণ করতে পারেন।ফায়ারবেস স্টোরেজ মূলত একটি শক্তিশালী এবং সহজ অবজেক্ট স্টোরেজ, যেখানে আপনি সহজেই আপনার ফাইল সংরক্ষণ করতে পারেন।
                                    </p>
                                </ol>
                            </div>
                            :
                            ''
                    }
                </article>
            </div>
        </div>
    );
};

export default Blog;