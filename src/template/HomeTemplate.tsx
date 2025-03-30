'use client';
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '@/components/Header/Header';
import Carousel from '@/components/Carousel/Carousel';
import BoiThanhProject from '@/components/BoiThanhProject/BoiThanhProject';
import Available from '@/components/Available/Available';
import Branch from '@/components/Branch/Branch';
import Footer from '@/components/Footer/Footer';
import checkCarousel from '@/utils/utils';
type Props = {}

const HomeTemplate = (props: Props) => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            checkCarousel();
        }
    }, []);
    return (
        <>
            <Header />
            <main>
                <Carousel />
                <BoiThanhProject />
                <Available />
                <Branch />
            </main>
            <Footer />
        </>
    )
}

export default HomeTemplate