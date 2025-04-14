
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import ContactPage from '@/OtherTemplate/ContactPage/ContactPage'
import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <>
            <Header />
            <main>
                <ContactPage />
            </main>
            <Footer />
        </>

    )
}

export default page