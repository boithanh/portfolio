'use client';
import React, { Suspense } from 'react'
import "swiper/css/bundle"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Skeleton } from "antd";
import { Autoplay, EffectCards, EffectCoverflow, EffectCreative, EffectCube, EffectFade, EffectFlip, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Header from '@/components/Header/Header';
import BoiThanhProject from '@/components/BoiThanhProject/BoiThanhProject';
import Available from '@/components/Available/Available';
const Branch = React.lazy(() => import("@/components/Branch/Branch"));
import Footer from '@/components/Footer/Footer';
const Entertainment = React.lazy(() => import("@/components/Entertainment/Entertainment"))
// import Extra from '@/components/Extra/Extra';
import CTA from '@/components/CTA/CTA';
import SwiperCarousel from '@/components/SwiperCarousel/SwiperCarousel';
const Extra = React.lazy(() => import("@/components/Extra/Extra"));
type Props = {

}

const HomeTemplate = (props: Props) => {
    return (
        <>
            <Header />
            <main>
                <SwiperCarousel Swiper={Swiper} SwiperSlide={SwiperSlide} Autoplay={Autoplay} Pagination={Pagination} EffectFade={EffectFade} EffectCards={EffectCards} EffectFlip={EffectFlip} />
                <BoiThanhProject />
                <CTA />
                <Available />
                <Suspense fallback={<Skeleton active />}><Branch /></Suspense>
                <Suspense fallback={<Skeleton active />}><Extra Swiper={Swiper} SwiperSlide={SwiperSlide} Navigation={Navigation} EffectCube={EffectCube} /></Suspense>
                <Suspense fallback={<Skeleton active />}><Entertainment /></Suspense>
            </main>
            <Footer />
        </>
    )
}

export default HomeTemplate