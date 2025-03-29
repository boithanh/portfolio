'use client';
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
type Props = {}

const HomeTemplate = (props: Props) => {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min").then((bootstrap) => {
            window.bootstrap = bootstrap; // Gán vào global để tránh lỗi "bootstrap is not defined"
            const carousel = document.querySelector("#carouselExampleIndicators");
            if (carousel) {
                new bootstrap.Carousel(carousel, {
                    interval: 3000,
                    ride: "carousel",
                });
            }
        });
    }, []);
    return (
        <>
            <div>
                <header id="totop" className="position-absolute top-0 start-0" style={{ "zIndex": 1, "width": "100%" }}>
                    <nav className="navbar navbar-expand-lg navbar-dark py-3">
                        <div className="container">
                            <a className="navbar-brand text-white" href="#">
                                <i className="fa fa-dice-d20 text-success" />
                                <span>CyberPortfolio</span>
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a id="home" className="nav-link me-3 text-white position-relative" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link me-3 text-white position-relative" href="#">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link me-3 text-white position-relative" href="#">Service</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link me-3 text-white position-relative" href="#">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
                <section className="cyber_carousel">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="overlay" />
                                <img src="/images/finland.jpg" className="d-block w-100" alt="..." />
                                <div className="carousel_content">
                                    <img className="animate__animated animate__fadeInUp animate__slow" src="/images/01-3.jpg" />
                                    <h1 className="animate__animated animate__fadeInUp animate__slow">Our goals. Our
                                        mission.</h1>
                                    <p className="animate__animated animate__fadeInUp animate__slow">How we help other
                                        companies to grow.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="overlay" />
                                <img src="/images/mountains.jpg" className="d-block w-100" alt="..." />
                                <div className="carousel_content">
                                    <img className="animate__animated animate__fadeInUp animate__slow" src="/images/02-3.jpg" />
                                    <h1 className="animate__animated animate__fadeInUp animate__slow">Our goals. Our
                                        mission.</h1>
                                    <p className="animate__animated animate__fadeInUp animate__slow">How we help other
                                        companies to grow.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="overlay" />
                                <img src="/images/mountains-1.jpg" className="d-block w-100" alt="..." />
                                <div className="carousel_content">
                                    <img className="animate__animated animate__fadeInUp animate__slow" src="/images/03-3.jpg" />
                                    <h1 className="animate__animated animate__fadeInUp animate__slow">Our goals. Our
                                        mission.</h1>
                                    <p className="animate__animated animate__fadeInUp animate__slow">How we help other
                                        companies to grow.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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

                <section className="cyber_available">
                    <div className="container position-relative">
                        <div className="cyber_avai_title title">
                            <h2>I'm Available For Hire</h2>
                            <p className="py-3">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                                Nulla mollis
                                dapibus
                                <br />
                                nunc, ut rhoncus turpis sodales quis. Integer sit amet mattis quam.
                            </p>
                        </div>
                        {/* content  */}
                        <div className="cyber_avai_content">
                            {/* 2 thuộc tính cho row thêm vào để cho ai ko su dụng hê thống grid boostrap maf tu lafm lay out grid */}
                            <div className="row">
                                {/* item  */}
                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-5">
                                    <div className="cyber_avai_item title">
                                        <i className="fa-solid fa-paintbrush" />
                                        <h3>Design</h3>
                                        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                                            Nulla mollis
                                            dapibus nunc</p>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 title mb-5">
                                    <div className="cyber_avai_item">
                                        <i className="fa fa-shekel-sign" />
                                        <h3>Marketing</h3>
                                        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                                            Nulla mollis
                                            dapibus nunc</p>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 title mb-5">
                                    <div className="cyber_avai_item">
                                        <i className="fa fa-camera" />
                                        <h3>Photography</h3>
                                        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                                            Nulla mollis
                                            dapibus nunc</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="branch">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-5 col-md-5 col-lg-5 col-xl-5">
                                <div className="branch_title title">
                                    <h2>Our Achievement <br />and Award</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                                        ullamcorper mattis, pulvinar dapibus leo.</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-5 col-md-5 col-lg-5 col-xl-7 position-relative">
                                <div className="branch_content">
                                    <p>Luctus porta semper aptent morbi. Vestibulum lectus tempus augue dictumst enim commodo
                                        facilisis. Mus laoreet scelerisque habitant urna dui sem diam. Purus dis nam eget.
                                        Scelerisque
                                        placerat lectus lorem etiam. Elementum integer phasellus lectus.</p>
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
                <footer className="py-5">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-xl-12">
                                <div className="footer_top pb-4">
                                    <a href="#"><i className="fa-brands fa-facebook-f" /></a>
                                    <a href="#"><i className="fa-brands fa-twitter" /></a>
                                    <a href="#"><i className="fa-brands fa-instagram" /></a>
                                    <a href="#"><i className="fa-brands fa-google-plus-g" /></a>
                                    <a href="#"><i className="fa-brands fa-linkedin" /></a>
                                </div>
                                <div className="footer_bottom pt-4">
                                    <p>© 2021 CyberPortfolio. All rights reserved | Designed by CyberSoft</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </ >
    )
}

export default HomeTemplate