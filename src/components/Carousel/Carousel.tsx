import React, { useEffect, useRef, useState } from 'react'
import checkCarousel from '@/utils/utils';
import Image from 'next/image';

type Props = {}

const Carousel = (props: Props) => {
    type myItem = {
        [key: string]: string
    }
    const arrItem: myItem[] = [
        {
            background: "finland.jpg",
            avatar: "01-3.jpg",
            title: "Hi, I'm Bành Bối Thạnh",
            content: "I'm Front end developer. I craft beautiful and functional websites using React, Next.js, and Tailwind CSS. Passionate about clean UI, smooth UX, and pixel- perfect design",
        },
        {
            background: "mountains.jpg",
            avatar: "02-3.jpg",
            title: "Design meets function",
            content: "Where creativity turns into user experience",
        },
        {
            background: "mountains-1.jpg",
            avatar: "03-3.jpg",
            title: "Build. Launch. Evolve",
            content: "From MVP to full-scale products — we’re with you",
        },
        {
            background: "finland.jpg",
            avatar: "04-4.jpg",
            title: "Start small. Grow smart",
            content: " From idea to product — we make it real",
        },
        {
            background: "mountains.jpg",
            avatar: "05-5.jpg",
            title: "Our goals. Our mission",
            content: "How we help other companies to grow",
        }

    ]

    // console.log(arrItem);

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
                        arrItem.map((item, index) => {
                            let { background, avatar, content, title } = item
                            return (
                                <div className={`carousel-item vh-100 ${index === 0 ? 'active' : ""}`} key={index}>
                                    <div className="overlay" />
                                    {/* <img src={`/images/${background}`} className='d-block w-100 vh-100 object-fit-cover' alt="..." /> */}
                                    <Image src={`/images/${background}`} className='d-block w-100 vh-100 object-fit-cover' alt='err' fill />
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