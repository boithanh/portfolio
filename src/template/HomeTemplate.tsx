'use client';
import React from 'react'
import Header from '@/components/Header/Header';
import Carousel from '@/components/Carousel/Carousel';
import BoiThanhProject from '@/components/BoiThanhProject/BoiThanhProject';
import Available from '@/components/Available/Available';
import Branch from '@/components/Branch/Branch';
import Footer from '@/components/Footer/Footer';
import Entertainment from '@/components/Entertainment/Entertainment';
import Extra from '@/components/Extra/Extra';
import CTA from '@/components/CTA/CTA';
type Props = {

}

const HomeTemplate = (props: Props) => {
    return (
        <>
            <Header />
            <main>
                <Carousel />
                <BoiThanhProject />
                <CTA />
                <Available />
                <Branch />
                <Extra />
                <Entertainment />
            </main>
            <Footer />
        </>
    )
}

export default HomeTemplate