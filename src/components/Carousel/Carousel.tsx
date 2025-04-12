import React, { useEffect, useRef, useState } from 'react'
import checkCarousel from '@/utils/utils';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/configStore';

type Props = {}

const Carousel = (props: Props) => {
    const carouselData = useSelector((state: RootState) => state.carouselSlice);

    useEffect(() => {
        if (typeof window !== "undefined") {
            checkCarousel();
        }
    }, [])
    return (
        <section className="cyber_carousel">
            <div id="carouselExampleIndicators" className="carousel carousel-fade slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {
                        carouselData.map((item, index) => {
                            {
                                return (
                                    <button key={index} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} className={index === 0 ? "active" : ""} aria-current="true" aria-label={`Slide ${index + 1}`} />
                                )
                            }
                        })
                    }
                </div>
                <div className="carousel-inner">
                    {
                        carouselData.map((item, index) => {
                            let { background, avatar, content, title } = item
                            return (
                                <div className={`position-relative w-100 carousel-item vh-100 ${index === 0 ? 'active' : ""}`} key={index}>
                                    <div className="overlay" />
                                    <Image src={`/images/${background}`} sizes='99vw' className='d-block w-100 vh-100 object-fit-cover' alt='err' fill priority />
                                    <div className="carousel_content">
                                        <img src={`/images/${avatar}`} className='object-fit-cover animate__animated animate__fadeInUp' />
                                        <h1 className='animate__animated animate__fadeInUp animate__delay-1s'>{title}</h1>
                                        <p className='animate__animated animate__fadeInUp animate__delay-2s'>{content}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    )
}

export default Carousel