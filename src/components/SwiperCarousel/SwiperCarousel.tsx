import { RootState } from '@/redux/configStore';
import Image from 'next/image';
import React from 'react'
import { useSelector } from 'react-redux';
import { SwiperModule } from 'swiper/types';

type Props = {
    Swiper: any,
    SwiperSlide: any,
    Pagination: object,
    Autoplay: object,
    EffectFade: SwiperModule,
    EffectCards: SwiperModule,
    EffectFlip: SwiperModule
}

const SwiperCarousel = ({ Swiper, SwiperSlide, Pagination, Autoplay, EffectFade, EffectCards, EffectFlip }: Props) => {
    const carouselData = useSelector((state: RootState) => state.carouselSlice);
    return (
        <section className='swiper-carousel'>
            <Swiper
                modules={[Pagination, Autoplay, EffectFade, EffectCards, EffectFlip]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }} // Hiển thị chấm điều hướng
                effect='fade' // Hiệu ứng chuyển đổi
                fadeEffect={
                    { crossFade: true }
                }
                loop={true} // Lặp vô hạn
                className="mySwiper"
                autoplay={{ delay: 8000 }}
            >
                {
                    carouselData.map((item, index) => {
                        let { background, avatar, content, title } = item
                        return (
                            <SwiperSlide>
                                <div className={`position-relative w-100 vh-100 carousel-item active`} key={index}>
                                    <div className="overlay" />
                                    <Image src={`/images/${background}`} className='d-block w-100 vh-100 object-fit-cover' sizes='99vw' alt={"err"} fill priority />
                                    <div className="carousel_content">
                                        <img src={`/images/${avatar}`} className='object-fit-cover animate__animated animate__fadeInUp' />
                                        <h1 className='animate__animated animate__fadeInUp animate__delay-1s'>{title}</h1>
                                        <p className='animate__animated animate__fadeInUp animate__delay-2s'>{content}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </section >
    )
}

export default SwiperCarousel