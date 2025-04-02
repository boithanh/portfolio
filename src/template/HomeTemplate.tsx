'use client';
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '@/components/Header/Header';
import Carousel from '@/components/Carousel/Carousel';
import BoiThanhProject from '@/components/BoiThanhProject/BoiThanhProject';
import Available from '@/components/Available/Available';
import Branch from '@/components/Branch/Branch';
import Footer from '@/components/Footer/Footer';
import AOS from "aos";
import "aos/dist/aos.css";
type Props = {}

const HomeTemplate = (props: Props) => {
    useEffect(() => {
        AOS.init({
            duration: 2000, // duration animation
            once: true, // run 1 when scroll
        });
        return () => {
            AOS.refreshHard(); // clear when dismount
        };
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