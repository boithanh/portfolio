import Header from '@/components/Header/Header'
import React from 'react'
import Banner from './_components/Banner'
import { PageProps } from '../../../../.next/types/app/page'

type Props = {
    params: {
        slug: string
    }
}

const page = async ({ params }: PageProps) => {
    const { slug } = await params;
    return (
        <div>
            <Header />
            <Banner />
        </div>
    )
}

export default page