'use client';
import AllProject from '@/components/AllProject/AllProject';
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React from 'react'

type Props = {

}

const AllProjectPage = (props: Props) => {
    return (
        <>
            <Header />
            <main>
                <AllProject />
            </main>
            <Footer />
        </>
    )
}

export default AllProjectPage