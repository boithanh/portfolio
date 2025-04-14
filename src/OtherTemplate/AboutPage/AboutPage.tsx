'use client';
import About from '@/components/About/About'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React, { useEffect } from 'react'

type Props = {
}

const AboutPage = (props: Props) => {

    return (
        <>
            <Header />
            <main>
                <About />
            </main>
            <Footer />
        </>
    )
}

export default AboutPage