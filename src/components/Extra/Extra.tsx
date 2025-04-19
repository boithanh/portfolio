import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards, EffectCoverflow, EffectCreative, EffectCube, EffectFade, EffectFlip, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/bundle"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
type Props = {}

const Extra = (props: Props) => {
    return (
        <section className='extra'>
            <div className='container'>
                <div className="row align-items-center">
                    <div className='overlay'></div>
                    <div className="col-sm-12 col-xl-4 z-1">
                        <div className="title">
                            <h2>My Extra Project</h2>
                            <p className='mb-4'>This is a collection of spontaneous mini-projects sparked by random moments of inspiration. Whenever an idea hits me—often in the middle of doing something else—I bring it to life through visuals that dance in my head and turn them into real interfaces</p>
                        </div>
                        <div className='mb-5'>
                            <a href="https://tien-ich-nho.vercel.app/" className='btn btn-outline-light w-100' target="_blank" rel="noopener noreferrer">View Detail</a>
                        </div>
                    </div>
                    <div className='col-sm-12 col-xl-8 z-1'>

                        <Swiper
                            modules={[Navigation, Pagination, Autoplay, EffectCreative, EffectCards, EffectCube, EffectFade, EffectFlip, EffectCoverflow]}
                            spaceBetween={0}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }} // Hiển thị chấm điều hướng
                            effect='cube'
                            loop={true} // Lặp vô hạn
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className='img-content'>
                                    <Image src="/images/extra.jpg" sizes="(max-width: 1200px) 100vw, 71vw" alt='err' fill />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='img-content'>
                                    <Image src="/images/extra2.jpg" sizes="(max-width: 1200px) 100vw, 71vw" alt='err' fill />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Extra