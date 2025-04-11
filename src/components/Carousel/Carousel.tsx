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
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={3} aria-label="Slide 4" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={4} aria-label="Slide 5" />
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
                                        <img src={`/images/${avatar}`} className='object-fit-cover' />
                                        <h1>{title}</h1>
                                        <p>{content}</p>
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