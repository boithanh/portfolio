import Header from '@/components/Header'
import React from 'react'
import Banner from './_components/Banner'

type Props = {
    params: {
        slug: string
    }
}

const page = (props: Props) => {
    return (
        <div>
            <Header />
            <Banner />
        </div>
    )
}

export default page