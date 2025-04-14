'use client';
import React from 'react'

type Props = {}

const About = (props: Props) => {
    return (
        <section className='about'>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-12 col-sm-12 col-md-5 col-xl-5">
                        <div className='img-content'></div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-7 col-xl-7">
                        <div className='title position-relative'>
                            <h2>About Me</h2>
                            <p>Hi there! I'm Bành Bối Thạnh, I'm a pre-fresher front-end developer who recently made the bold (and slightly terrifying) leap from IT Help Desk to the world of coding. At first, JavaScript looked like alien language and CSS felt like a never-ending puzzle. But hey — I’ve always believed that curiosity and caffeine can fix almost anything. Every day, I trade tech support tickets for broken layouts, and I’m slowly but surely learning to turn bugs into features (on purpose, someday). I may not know it all (yet), but I’m all in — learning, improving, and laughing through the chaos, one div at a time.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About