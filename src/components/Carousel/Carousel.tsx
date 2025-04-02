import React, { useEffect, useRef, useState } from 'react'
import checkCarousel from '@/utils/utils';

type Props = {}

const Carousel = (props: Props) => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            checkCarousel();
        }
    }, [])
    return (
        <section className="cyber_carousel">
            <div id="carouselExampleIndicators" className="carousel carousel-fade slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active vh-100">
                        <div className="overlay" />
                        <img src="/images/finland.jpg" className="d-block w-100 vh-100 object-fit-cover" alt="..." />
                        <div className="carousel_content">
                            <img src="/images/01-3.jpg" data-aos="fade-up" />
                            <h1 data-aos="fade-up" data-aos-delay="500">Our goals. Our
                                mission.</h1>
                            <p data-aos="fade-up" data-aos-delay="800">How we help other
                                companies to grow.</p>
                        </div>
                    </div>
                    <div className="carousel-item vh-100">
                        <div className="overlay" />
                        <img src="/images/mountains.jpg" className="d-block w-100 vh-100 object-fit-cover" alt="..." />
                        <div className="carousel_content">
                            <img src="/images/02-3.jpg" data-aos="fade-up" />

                            <h1 data-aos="fade-up" data-aos-delay="500">Our goals. Our
                                mission.</h1>
                            <p data-aos="fade-up" data-aos-delay="500">How we help other
                                companies to grow.</p>
                        </div>
                    </div>
                    <div className="carousel-item vh-100">
                        <div className="overlay" />
                        <img src="/images/mountains-1.jpg" className="d-block w-100 vh-100 object-fit-cover" alt="..." />
                        <div className="carousel_content">
                            <img data-aos="fade-up" src="/images/03-3.jpg" />
                            <h1 data-aos="fade-up" data-aos-delay="500">Our goals. Our
                                mission.</h1>
                            <p data-aos="fade-up" data-aos-delay="500">How we help other
                                companies to grow.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Carousel