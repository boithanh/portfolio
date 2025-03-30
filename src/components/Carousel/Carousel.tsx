import React from 'react'

type Props = {}

const Carousel = (props: Props) => {
    return (
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
    )
}

export default Carousel