import Link from 'next/link'
import React from 'react'
import PageNotFoundAnimation from './PageNotFoundAnimation'

type Props = {}

const PageNotFound = (props: Props) => {
    return (
        <div className="text-center flex flex-col items-center h-screen justify-center">
            <PageNotFoundAnimation />
            <Link
                href={"/"}
                className="px-6 py-3 bg-[#E31C8D] hover:bg-[#211C5B] border-2 border-black delay-75 rounded-xl text-white"
            >
                Bấm vào để quay về trang chủ
            </Link>
        </div>
    )
}

export default PageNotFound