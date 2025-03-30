import React from 'react'

type Props = {}

const BoiThanhProject = (props: Props) => {
    return (
        <section className="cyber_project py-5">
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="cyber_project_title title">
                        <h2>I Love What I Do
                        </h2>
                        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla
                            mollis
                            dapibus nunc, ut rhoncus turpis sodales quis. Integer sit amet mattis quam.Vestibulum ante ipsum
                            primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc </p>
                    </div>
                </div>
                <div className="cyber_project_content">
                    <div className="row">
                        <ul className="nav nav-pills py-4 justify-content-center" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link border border-black mx-2 text-black active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">All Project</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link border border-black mx-2 text-black" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Illustration</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link border border-black mx-2 text-black" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Photography</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link border border-black mx-2 text-black" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false">website</button>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
                            <div className="row gy-4">
                                {/* Item */}
                                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                    <div className="wow project_item animate__animated animate__zoomIn">
                                        <img src="/images/g1.jpg" alt="G1" />
                                        <div className="project_item_text">
                                            <h5>Apologetic robot holding flowers</h5>
                                            <p>Branding</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Item */}
                                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                    <div className="wow project_item animate__animated animate__zoomIn">
                                        <img src="/images/g2.jpg" alt="G1" />
                                        <div className="project_item_text">
                                            <h5>Woman walking her small dog</h5>
                                            <p>Illustrations</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Item */}
                                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                    <div className="wow project_item animate__animated animate__zoomIn">
                                        <img src="/images/g3.jpg" alt="G1" />
                                        <div className="project_item_text">
                                            <h5>Oil bottle branding</h5>
                                            <p>Branding</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Item */}
                                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                    <div className="wow project_item animate__animated animate__zoomIn">
                                        <img src="/images/g4.jpg" alt="G1" />
                                        <div className="project_item_text">
                                            <h5>Smiling Woman</h5>
                                            <p>Illustrations</p>
                                        </div>
                                    </div>
                                </div> {/* Item */}
                                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                    <div className="wow project_item animate__animated animate__zoomIn">
                                        <img src="/images/g5.jpg" alt="G1" />
                                        <div className="project_item_text">
                                            <h5>Drink can design</h5>
                                            <p>Packaging</p>
                                        </div>
                                    </div>
                                </div> {/* Item */}
                                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                    <div className="wow project_item animate__animated animate__zoomIn">
                                        <img src="/images/g6.jpg" alt="G1" />
                                        <div className="project_item_text">
                                            <h5>I love you hand gesture</h5>
                                            <p>Illustrations</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>
                            <div className="row gy-4">
                                {/* Item */}
                                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                    <div className="wow project_item animate__animated animate__zoomIn">
                                        <img src="/images/g1.jpg" alt="G1" />
                                        <div className="project_item_text">
                                            <h5>Apologetic robot holding flowers</h5>
                                            <p>Branding</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Item */}
                                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                    <div className="wow project_item animate__animated animate__zoomIn">
                                        <img src="/images/g2.jpg" alt="G1" />
                                        <div className="project_item_text">
                                            <h5>Woman walking her small dog</h5>
                                            <p>Illustrations</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Item */}
                                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                    <div className="wow project_item animate__animated animate__zoomIn">
                                        <img src="/images/g3.jpg" alt="G1" />
                                        <div className="project_item_text">
                                            <h5>Oil bottle branding</h5>
                                            <p>Branding</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex={0}>
                            <div className="row gy-4">
                                {/* Item */}
                                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                    <div className="wow project_item animate__animated animate__zoomIn">
                                        <img src="/images/g3.jpg" alt="G1" />
                                        <div className="project_item_text">
                                            <h5>Oil bottle branding</h5>
                                            <p>Branding</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Item */}
                                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                    <div className="wow project_item animate__animated animate__zoomIn">
                                        <img src="/images/g4.jpg" alt="G1" />
                                        <div className="project_item_text">
                                            <h5>Smiling Woman</h5>
                                            <p>Illustrations</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabIndex={0}>
                            <div className="row gy-4">
                                {/* Item */}
                                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                    <div className="wow project_item animate__animated animate__zoomIn">
                                        <img src="/images/g6.jpg" alt="G1" />
                                        <div className="project_item_text">
                                            <h5>I love you hand gesture</h5>
                                            <p>Illustrations</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default BoiThanhProject