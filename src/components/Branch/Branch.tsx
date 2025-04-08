import React from 'react'

type Props = {}

const Branch = (props: Props) => {
    return (
        <section className="branch">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-5 col-md-5 col-lg-5 col-xl-5">
                        <div className="branch_title title">
                            <h2>EDUCATION and CERTIFICATIONS</h2>
                            <p>🎓 Graduated from <b>Saigon University of Technology</b>, majoring in <b className='text-success'>Computer Science.</b></p>
                            <p>Certified <b className='text-success'>PHP Developer</b> – <b>Trung tâm tin học đại học khoa học tự nhiên TPHCM</b></p>
                            <p><b className='text-success'>Frofessional Front-end Developer</b> – <b>Cybersoft Academy</b></p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-5 col-md-5 col-lg-5 col-xl-7 position-relative">
                        <div className="branch_content">
                            <h2>EXPERIENCE</h2>
                            <ul>
                                <li className='mb-3'><b className='text-danger'>Cybersoft Software Development Bootcamp Participant: </b> Acquired hands-on experience in building web applications using HTML, CSS, JavaScript, React, and Redux, completing 5+ real-world projects.
                                    Developed multiple UI components following UI/UX best practices, improving accessibility and responsiveness by 30% based on Lighthouse
                                    audits.Implemented and optimized dynamic web features such as interactive forms, real-time data fetching, and state management, enhancing
                                    application performance by 40% compared to initial versions.
                                    Collaborated on group projects using Agile methodologies, Git version control, and conducted weekly code reviews, improving team efficiency and code quality.</li>
                                <li className='mb-3'><b className='text-danger'>Việt Money: </b>Managed and repaired equipment to ensure 95% operational efficiency, coordinated with the development team to enhance software product
                                    functionality, reported errors, and supported users in installation and testing after patch updates, resulting in a 30% reduction in support
                                    tickets.</li>
                                <li className='mb-3'><b className='text-danger'>Coffe Mug: </b>Developed a web interface on the WordPress platform using HTML, CSS, and PHP, enhancing user engagement by 30%.</li>
                            </ul>
                            <div className="branch_img">
                                <div className="row">
                                    <div className="col">
                                        <img src="/images/award-1.png" alt="award" />
                                    </div>
                                    <div className="col">
                                        <img src="/images/award-2.png" alt="award" />
                                    </div>
                                    <div className="col">
                                        <img src="/images/award-3.png" alt="award" />
                                    </div>
                                    <div className="col">
                                        <img src="/images/award-4.png" alt="award" />
                                    </div>
                                    <div className="col">
                                        <img src="/images/award-5.png" alt="award" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Branch