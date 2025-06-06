import React from 'react'
import Image from 'next/image';
import { SwiperModule } from 'swiper/types';
type Props = {
    Swiper: any,
    SwiperSlide: any,
    Navigation: any,
    EffectCube: SwiperModule
}

const Extra = ({ Swiper, SwiperSlide, Navigation, EffectCube }: Props) => {
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
                            <a href="https://tienichnho.vercel.app/" className='btn btn-outline-light w-100' target="_blank" rel="noopener noreferrer">View Detail</a>
                        </div>
                    </div>
                    <div className='col-sm-12 col-xl-8 z-1'>

                        <Swiper
                            modules={[Navigation, EffectCube,]}
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
                                    <Image src="/images/blood-pressure-funny.png" sizes="(max-width: 1200px) 100vw, 71vw" alt='err' fill />
                                    <span className='badge bg-black position-absolute mt-1 ms-1'>App check các thông số đo huyết áp</span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='img-content'>
                                    <Image src="/images/lottery_1.png" sizes="(max-width: 1200px) 100vw, 71vw" alt='err' fill />
                                    <span className='badge bg-black position-absolute mt-1 ms-1'>App Random vé số kiến thiết ngẫu nhiên</span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='img-content'>
                                    <Image src="/images/lottery_2.png" sizes="(max-width: 1200px) 100vw, 71vw" alt='err' fill />
                                    <span className='badge bg-black position-absolute mt-1 ms-1'>App Random số mega 6/45 ngẫu nhiên</span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='img-content'>
                                    <Image src="/images/lottery_3.png" sizes="(max-width: 1200px) 100vw, 71vw" alt='err' fill />
                                    <span className='badge bg-black position-absolute mt-1 ms-1'>App Random số mega 6/55 ngẫu nhiên</span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='img-content'>
                                    <Image src="/images/extra.jpg" sizes="(max-width: 1200px) 100vw, 71vw" alt='err' fill style={{ objectPosition: "top" }} />
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